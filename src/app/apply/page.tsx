"use client";
import { useState } from "react";

// A clean, Google-Form–style application page built with Tailwind CSS.
// Drop this into a Next.js app (App Router) as app/application/page.jsx or similar.

const DAYS = [
  { key: "wed", label: "Wednesday (9/3)" },
  { key: "thu", label: "Thursday (9/4)" },
  { key: "fri", label: "Friday (9/5)" },
  { key: "sun", label: "Sunday (9/7)" },
  { key: "mon", label: "Monday (9/8)" },
];

const TIMES = [
  "Available All Day",
  "NOT Available",
  "9-10am",
  "10-11am",
  "11am-12pm",
  "12pm-1pm",
  "1-2pm",
  "2-3pm",
  "3-4pm",
  "4-5pm",
  "5-6pm",
  "6-7pm",
];

export default function ApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    nickname: "",
    studentId: "",
    major: "",
    minor: "",
    gender: "",
    genderOther: "",
    classStanding: "",
    gradSemester: "",
    dob: "",
    phone: "",
    personalEmail: "",
    sjsuEmail: "",
    gpa: "",
    interviewPref: "",
    availability: DAYS.reduce((acc, d) => {
      acc[d.key] = [] as string[];
      return acc;
    }, {} as Record<string, string[]>),
    thursdayMeetConfirm: false,
  });

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleAvailability(dayKey: string, timeLabel: string) {
    setForm((prev) => {
      const prevForDay = new Set(prev.availability[dayKey]);

      // If choosing "Available All Day" or "NOT Available", clear other picks for that day
      if (timeLabel === "Available All Day" || timeLabel === "NOT Available") {
        return {
          ...prev,
          availability: {
            ...prev.availability,
            [dayKey]: prevForDay.has(timeLabel) ? [] : [timeLabel],
          },
        };
      }

      // If any of the two exclusives were set, remove them first
      prevForDay.delete("Available All Day");
      prevForDay.delete("NOT Available");

      if (prevForDay.has(timeLabel)) {
        prevForDay.delete(timeLabel);
      } else {
        prevForDay.add(timeLabel);
      }

      return {
        ...prev,
        availability: {
          ...prev.availability,
          [dayKey]: Array.from(prevForDay),
        },
      };
    });
  }

  function validate() {
    const required = [
      ["email", form.email],
      ["name", form.name],
      ["studentId", form.studentId],
      ["major", form.major],
      ["gender", form.gender],
      ["classStanding", form.classStanding],
      ["gradSemester", form.gradSemester],
      ["dob", form.dob],
      ["phone", form.phone],
      ["personalEmail", form.personalEmail],
      ["sjsuEmail", form.sjsuEmail],
      ["gpa", form.gpa],
      ["interviewPref", form.interviewPref],
    ] as const;

    for (const [key, val] of required) {
      if (!val || (typeof val === "string" && val.trim() === "")) {
        return { ok: false, message: `Please fill out the required field: ${key}.` };
      }
    }

    if (form.gender === "Other" && !form.genderOther.trim()) {
      return { ok: false, message: "Please specify your gender in 'Other'." };
    }

    if (!form.thursdayMeetConfirm) {
      return { ok: false, message: "Please confirm you can attend Thursday 9PM meetings." };
    }

    return { ok: true };
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      alert(v.message);
      return;
    }

    setSubmitting(true);
    try {
      // TODO: hook up to your backend. For now, we simply log & fake success.
      console.log("Application submitted", form);
      // Example POST:
      // await fetch("/api/applications", { method: "POST", body: JSON.stringify(form) });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong submitting the application.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Fall 2025 — Theta Tau New Member Application</h1>
          <p className="mt-2 text-neutral-600">Application for potential new members of SJSU Theta Tau.</p>
          <p className="mt-1 text-neutral-700">
            Please submit the form as soon as you can before <strong>Wednesday (9/3) @ 11:59pm</strong>.
          </p>
          <p className="mt-4 text-sm text-rose-600">* Indicates required</p>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
            <p className="font-medium">Thank you! Your application has been recorded.</p>
          </div>
        )}

        {/* Form Card */}
        <form onSubmit={onSubmit} className="mt-6 grid gap-6">
          {/* Email */}
          <Section title="Email *">
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
            />
          </Section>

          {/* Name / Nickname */}
          <Section title="Name (First and Last) *">
            <Input
              placeholder="First Last"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
            />
          </Section>

          <Section title="Nickname (if applicable)">
            <Input
              placeholder="Optional"
              value={form.nickname}
              onChange={(e) => updateField("nickname", e.target.value)}
            />
          </Section>

          {/* Student ID / Major / Minor */}
          <Section title="Student ID *">
            <Input
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g., 012345678"
              value={form.studentId}
              onChange={(e) => updateField("studentId", e.target.value)}
              required
            />
          </Section>

          <Section title="Major *">
            <Input
              placeholder="e.g., Software Engineering"
              value={form.major}
              onChange={(e) => updateField("major", e.target.value)}
              required
            />
          </Section>

          <Section title="Minor (if applicable)">
            <Input
              placeholder="Optional"
              value={form.minor}
              onChange={(e) => updateField("minor", e.target.value)}
            />
          </Section>

          {/* Gender */}
          <Section title="Gender *">
            <div className="flex flex-col gap-2">
              {[
                "Male",
                "Female",
                "Prefer not to say",
                "Other",
              ].map((g) => (
                <label key={g} className="inline-flex items-center gap-3 text-neutral-800">
                  <input
                    type="radio"
                    name="gender"
                    className="h-4 w-4"
                    checked={form.gender === g}
                    onChange={() => updateField("gender", g)}
                    required
                  />
                  <span>{g}</span>
                </label>
              ))}
              {form.gender === "Other" && (
                <Input
                  className="mt-2"
                  placeholder="Please specify"
                  value={form.genderOther}
                  onChange={(e) => updateField("genderOther", e.target.value)}
                />
              )}
            </div>
          </Section>

          {/* Class Standing / Graduation */}
          <Section title="Year/Class Standing *">
            <Input
              placeholder="e.g., Sophomore / 2nd year"
              value={form.classStanding}
              onChange={(e) => updateField("classStanding", e.target.value)}
              required
            />
          </Section>

          <Section title="Planned Graduation Semester *">
            <Input
              placeholder="e.g., Spring 2027"
              value={form.gradSemester}
              onChange={(e) => updateField("gradSemester", e.target.value)}
              required
            />
          </Section>

          {/* DOB / Phone */}
          <Section title="Date of Birth *">
            <Input
              type="date"
              value={form.dob}
              onChange={(e) => updateField("dob", e.target.value)}
              required
            />
          </Section>

          <Section title="Phone number *">
            <Input
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              required
            />
          </Section>

          {/* Emails */}
          <Section title="Personal Email *">
            <Input
              type="email"
              placeholder="you@personal.com"
              value={form.personalEmail}
              onChange={(e) => updateField("personalEmail", e.target.value)}
              required
            />
          </Section>

          <Section title="SJSU Email (first.last@sjsu.edu) *">
            <Input
              type="email"
              placeholder="first.last@sjsu.edu"
              value={form.sjsuEmail}
              onChange={(e) => updateField("sjsuEmail", e.target.value)}
              required
            />
          </Section>

          {/* GPA */}
          <Section title="Cumulative GPA *">
            <Input
              type="number"
              step="0.01"
              min="0"
              max="4.0"
              placeholder="e.g., 3.75"
              value={form.gpa}
              onChange={(e) => updateField("gpa", e.target.value)}
              required
            />
          </Section>

          {/* Interview preference */}
          <Section title="Interview Preference *">
            <div className="flex flex-col gap-2">
              {["In person (Library)", "Online (Zoom)"].map((opt) => (
                <label key={opt} className="inline-flex items-center gap-3 text-neutral-800">
                  <input
                    type="radio"
                    name="interviewPref"
                    className="h-4 w-4"
                    checked={form.interviewPref === opt}
                    onChange={() => updateField("interviewPref", opt)}
                    required
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </Section>

          {/* Availability Matrix */}
          <Section title="Best Available time for Interview *">
            <p className="text-sm text-neutral-600 mb-4">
              Please select all available times and email us at <span className="font-medium">sjsuthetatau@gmail.com</span> if you are unable to interview at any of these times.
            </p>

            <div className="space-y-6">
              {DAYS.map((day) => (
                <div key={day.key} className="border border-neutral-200 rounded-xl p-4">
                  <div className="font-medium mb-3">{day.label}</div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {TIMES.map((t) => {
                      const id = `${day.key}-${t}`;
                      const checked = form.availability[day.key]?.includes(t);
                      return (
                        <label key={id} className="flex items-center gap-3">
                          <input
                            id={id}
                            type="checkbox"
                            className="h-4 w-4"
                            checked={!!checked}
                            onChange={() => toggleAvailability(day.key, t)}
                          />
                          <span className="text-sm text-neutral-800">{t}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Thursday confirm */}
          <Section title="Weekly Meetings Confirmation *">
            <label className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={form.thursdayMeetConfirm}
                onChange={(e) => updateField("thursdayMeetConfirm", e.target.checked)}
                required
              />
              <span className="text-neutral-800">
                I confirm I can attend weekly meetings on <strong>Thursday at 9PM</strong>.
              </span>
            </label>
          </Section>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              className="text-sm text-neutral-600 hover:underline"
              onClick={() => {
                setForm({
                  email: "",
                  name: "",
                  nickname: "",
                  studentId: "",
                  major: "",
                  minor: "",
                  gender: "",
                  genderOther: "",
                  classStanding: "",
                  gradSemester: "",
                  dob: "",
                  phone: "",
                  personalEmail: "",
                  sjsuEmail: "",
                  gpa: "",
                  interviewPref: "",
                  availability: DAYS.reduce((acc, d) => {
                    acc[d.key] = [];
                    return acc;
                  }, {} as Record<string, string[]>),
                  thursdayMeetConfirm: false,
                });
                setSubmitted(false);
              }}
            >
              Clear form
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>
          </div>
        </form>

        <footer className="mt-10 text-xs text-neutral-500">
          Never submit passwords through this form. This content is neither created nor endorsed by Google.
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
      <h2 className="text-lg font-medium text-neutral-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  const { className = "", ...rest } = props;
  return (
    <input
      className={`w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 ${className}`}
      {...rest}
    />
  );
}
