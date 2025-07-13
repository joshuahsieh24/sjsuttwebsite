export default function Footer() {
  return (
    <footer className="bg-[#141416] py-10">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center">

          <div>
            <h4 className="mb-2 text-[#e4e4e4] font-semibold">Organization</h4>
            <ul>
              <li>
                <a href="https://thetatau.org/" target="_blank" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Theta Tau Nationals</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[#e4e4e4] font-semibold">Contact</h4>
            <ul>
              <li>
                <a href="mailto:sjsuthetatau@gmail.com" target="_blank" className="text-[#e4e4e4] hover:text-[#fecb33] transition">sjsuthetatau@gmail.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/sjsuthetatau/?hl=en" target="_blank" className="text-[#e4e4e4] hover:text-[#fecb33] transition">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}