export default function Footer() {
  return (
    <footer className="bg-[#141416] py-10">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-center">

          <div>
            <h4 className="mb-2 text-[#e4e4e4] font-semibold">Organization</h4>
            <ul>
              <li>
                <a href="https://thetatau.org/" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Theta Tau Nationals</a>
              </li>
              <li>
                <a href="/about" className="text-[#e4e4e4] hover:text-[#fecb33] transition">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[#e4e4e4] font-semibold">Recruitment</h4>
            <ul>
              <li>
                <a href="#" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Applications</a>
              </li>
              <li>
                <a href="#" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Rush 101</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[#e4e4e4] font-semibold">Contact</h4>
            <ul>
              <li>
                <a href="mailto:sjsuthetatau@gmail.com" className="text-[#e4e4e4] hover:text-[#fecb33] transition">sjsuthetatau@gmail.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/sjsuthetatau/?hl=en" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}