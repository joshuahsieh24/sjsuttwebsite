export default function Home() {
  return (
    <div className="relative flex flex-col justify-end min-h-screen font-sans">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/group1.png')" }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <div className="max-w-[1100px] mx-auto px-4 w-full pb-20">
        <div className="flex flex-col items-start">
          <h1 className="flex flex-col text-white leading-[0.9] text-[clamp(3rem,8vw,7rem)] font-semibold tracking-tight">
            <span>THETA</span>
            <span>TAU</span>
          </h1>
          <p className="flex flex-col text-white text-[2rem] font-thin leading-tight pt-5">
            <span>
              Premier Professional{" "}
              <span className="font-semibold">CO-ED</span> Engineering
            </span>
            <span>Fraternity at San Jose State</span>
          </p>
        </div>
      </div>
    </div>
  );
}