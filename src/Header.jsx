import  { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Name */}
        <div className="text-white font-bold text-lg ml-[100px]">
          Ranjith Kumar Reddy
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-14 text-white mr-[100px]">
          <li><a href="#Home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#Projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#Skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#Education" className="hover:text-gray-300">Education</a></li>
          <li><a href="#Contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-6 h-6 fill-current"
            >
              <path
                fillRule="evenodd"
                d="M2.5 5A.5.5 0 0 1 3 4h14a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5zM3 9a.5.5 0 0 0 0 1h14a.5.5 0 1 0 0-1H3zm0 4a.5.5 0 0 0 0 1h14a.5.5 0 1 0 0-1H3z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <ul className="mt-4 text-white">
          <li>
            <a
              href="#Home"
              className="block py-2 px-4 bg-gray-700 hover:bg-gray-600"
            >Home</a>
          </li>
          <li>
            <a
              href="#Projects"
              className="block py-2 px-4 bg-gray-700 hover:bg-gray-600"
            >Projects</a>
          </li>
          <li>
            <a
              href="#Skills"
              className="block py-2 px-4 bg-gray-700 hover:bg-gray-600"
            >Skills</a>
          </li>
          <li>
            <a
              href="#Education"
              className="block py-2 px-4 bg-gray-700 hover:bg-gray-600"
            >Education</a>
          </li>
          <li>
            <a
              href="#Contact"
              className="block py-2 px-4 bg-gray-700 hover:bg-gray-600"
            >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
