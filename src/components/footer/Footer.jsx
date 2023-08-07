import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-100">
      <div className="flex justify-center items-center w-full max-w-[560px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] mx-auto p-4">
        <div className="my-4 flex justify-between w-full">
          <div>
            <span>Copyright @ </span>
            <span className="font-bold">Gooramotho Badisang</span>
          </div>
          <div>
            <a className="flex gap-2 bg-gray-100 rounded-full p-1" href="#">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#111827"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
