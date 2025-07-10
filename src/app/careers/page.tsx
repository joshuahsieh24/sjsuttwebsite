export default function CareersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-4xl font-bold">Careers Page</h1>
      <p className="text-lg">This is the careers page content.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}