import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full py-4 bg-gray-900 text-gray-100">
      <div className="max-w-[560px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] mx-auto flex flex-col px-4">
        <nav className="flex justify-between">
          <ul className="flex gap-2">
            <li className="px-1 py-2">
              <a className="px-1 py-2" href="#about">
                About
              </a>
            </li>
            <li className="px-1 py-2">
              <a className="px-1 py-2" href="#projects">
                Work
              </a>
            </li>
            <li className="px-1 py-2">
              <a className="px-1 py-2" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <a className="flex gap-1 px-2 py-2 border-b-2" href="#contact">
            <div>Hire Me</div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
