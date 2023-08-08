import React, { useState } from 'react';

const About = () => {
  const [hovered, setHovered] = useState(false);
  let bg =
    hovered == false
      ? 'https://i.ibb.co/2YNm1Lc/dabedit.png'
      : 'https://i.ibb.co/cJvxW0q/dab.png';
  function changeBG() {
    setHovered(!hovered);
  }

  return (
    <div
      id="about"
      className="flex flex-col-reverse lg:flex-row w-full max-w-[560px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] mx-auto mt-32 mb-16 lg:mt-48 lg:mb-32"
    >
      <div className="flex flex-col align-center px-4 lg:flex-[2]">
        <div className="flex lg:items-center">
          <ul className="w-full font-bold">
            <li className="text-5xl lg:text-7xl my-8 ">G. Badisang</li>
            <li className="text-2xl mb-2 italic ml-4">Developer</li>
            <li>
              <ul className="flex gap-3 ml-4">
                <li>
                  <a href="#">
                    <svg
                      className="w-5"
                      fill="#0c40c8"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM44.5759 63.9152C44.5759 53.2277 53.2277 44.4062 64.0848 44.4062C74.7723 44.4062 83.5938 53.2277 83.5938 63.9152C83.5938 74.7723 74.7723 83.4241 64.0848 83.4241C53.2277 83.4241 44.5759 74.7723 44.5759 63.9152ZM51.3616 63.9152C51.3616 71.0402 57.1295 76.6384 64.0848 76.6384C71.0402 76.6384 76.6384 71.0402 76.6384 63.9152C76.6384 56.9598 71.0402 51.3616 64.0848 51.3616C56.9598 51.3616 51.3616 56.9598 51.3616 63.9152ZM84.2723 39.1473C86.817 39.1473 88.8527 41.183 88.8527 43.7277C88.8527 46.2723 86.817 48.308 84.2723 48.308C81.7277 48.308 79.692 46.2723 79.692 43.7277C79.692 41.183 81.7277 39.1473 84.2723 39.1473ZM95.6384 32.3616C100.049 36.7723 101.406 42.2009 101.746 48.308C102.085 54.5848 102.085 73.4152 101.746 79.692C101.406 85.7991 100.049 91.058 95.6384 95.6384C91.2277 100.049 85.7991 101.406 79.692 101.746C73.4152 102.085 54.5848 102.085 48.308 101.746C42.2009 101.406 36.942 100.049 32.3616 95.6384C27.9509 91.058 26.5938 85.7991 26.2545 79.692C25.9152 73.4152 25.9152 54.5848 26.2545 48.308C26.5938 42.2009 27.9509 36.7723 32.3616 32.3616C36.942 27.9509 42.2009 26.5938 48.308 26.2545C54.5848 25.9152 73.4152 25.9152 79.692 26.2545C85.7991 26.5938 91.2277 27.9509 95.6384 32.3616ZM86.4777 93.6027C89.7009 92.2455 92.4152 89.7009 93.6027 86.308C95.3325 82.1275 95.225 72.9247 95.1536 66.8187C95.141 65.7391 95.1295 64.7563 95.1295 63.9152C95.1295 63.105 95.1408 62.1511 95.1533 61.0976C95.2247 55.0929 95.3345 45.852 93.6027 41.5223C92.2455 38.2991 89.7009 35.5848 86.4777 34.3973C82.148 32.6654 72.9071 32.7753 66.9024 32.8466C65.8489 32.8592 64.895 32.8705 64.0848 32.8705C63.2437 32.8705 62.2609 32.859 61.1813 32.8464C55.0753 32.775 45.8724 32.6675 41.692 34.3973C38.2991 35.7545 35.7545 38.2991 34.3973 41.5223C32.6654 45.852 32.7752 55.0929 32.8466 61.0976C32.8591 62.1511 32.8705 63.105 32.8705 63.9152C32.8705 64.7563 32.859 65.7391 32.8464 66.8187C32.775 72.9247 32.6674 82.1275 34.3973 86.308C35.7545 89.7009 38.2991 92.2455 41.692 93.6027C45.8724 95.3326 55.0753 95.225 61.1813 95.1536C62.2609 95.141 63.2437 95.1295 64.0848 95.1295C64.895 95.1295 65.8489 95.1408 66.9024 95.1534C72.907 95.2247 82.148 95.3346 86.4777 93.6027Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://facebook.com">
                    <svg
                      className="w-5"
                      fill="#0c40c8"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      className="w-5"
                      fill="#0c40c8"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM23 62.5662C23 39.8911 44.5677 26 66.5625 26C86.6354 26 105 39.2782 105 59.502C105 78.5001 94.75 99.7452 72.1146 99.7452C66.5625 99.7452 59.9427 97.0896 57.1667 92.3911C56.6292 94.4944 56.156 96.3945 55.7235 98.1315C52.375 111.577 51.4608 115.249 42.0052 127.732C41.4674 127.938 41.2547 128.04 41.0941 127.986C40.9359 127.933 40.8283 127.728 40.5104 127.323C40.49 127.138 40.4697 126.954 40.4494 126.77C40.0436 123.091 39.6562 119.58 39.6562 115.883C39.6562 106.282 43.2056 93.2861 46.2023 82.3135C47.0951 79.0446 47.9388 75.9553 48.625 73.1888C46.9167 69.9203 46.4896 66.2432 46.4896 62.7705C46.4896 46.428 66.5625 43.9767 66.5625 57.4592C66.5625 61.4685 65.1023 65.3744 63.6516 69.2549C62.2196 73.0853 60.7969 76.891 60.7969 80.7471C60.7969 85.8542 65.4948 89.5312 70.8333 89.5312C85.5677 89.5312 90.0521 69.3074 90.0521 58.4806C90.0521 43.9767 79.375 36.0097 64.6406 36.0097C47.7708 36.0097 34.7448 47.6537 34.7448 63.9962C34.7448 69.3779 37.0833 72.9885 38.6011 75.3317C39.3301 76.4574 39.8698 77.2906 39.8698 77.8872C39.8698 79.5215 38.5885 85.037 36.4531 85.037C31.3281 85.037 23 76.8658 23 62.5662Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      className="w-5"
                      fill="#0c40c8"
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0H118C123.523 0 128 4.47715 128 10V118C128 123.523 123.523 128 118 128H10C4.47715 128 0 123.523 0 118V10C0 4.47715 4.47715 0 10 0ZM95.4298 50.05C95.4298 71.3999 79.1386 96 49.363 96C40.1897 96 31.6682 93.3499 24.5 88.7502C25.8034 88.9 27.0565 88.9501 28.4099 88.9501C35.9789 88.9501 42.9467 86.4001 48.5109 82.0501C41.3929 81.9 35.4277 77.25 33.3724 70.85C34.375 71 35.3775 71.0999 36.4303 71.0999C37.884 71.0999 39.3377 70.8999 40.691 70.55C33.2722 69.0498 27.708 62.55 27.708 54.7V54.5001C29.8633 55.7001 32.3699 56.4501 35.0264 56.5499C30.6654 53.6499 27.8084 48.6999 27.8084 43.0999C27.8084 40.0999 28.6101 37.3499 30.0139 34.9499C37.984 44.7499 49.9645 51.1498 63.3983 51.8499C63.1478 50.6499 62.9974 49.4 62.9974 48.15C62.9974 39.25 70.2157 32 79.1884 32C83.8503 32 88.0608 33.95 91.0185 37.1C94.6776 36.4 98.1864 35.05 101.294 33.2C100.091 36.9501 97.5348 40.1001 94.1765 42.1C97.4348 41.7501 100.593 40.8499 103.5 39.6C101.295 42.7999 98.5376 45.6499 95.3796 47.9499C95.4298 48.6499 95.4298 49.3501 95.4298 50.05Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="my-6">
          <p className="w-full max-w-[700px]">
            I've honed my skills in HTML, CSS, and JavaScript and now React by
            learning the ins and outs of creating visually appealing and
            user-friendly websites. I'm excited to take on new challenges and
            grow my expertise. Let's collaborate and turn your business needs
            into reality, one project at a time.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center lg:justify-center w-full h-full lg:flex-[1]">
        <div className="relative ml-auto lg:ml-0 lg:mx-auto mr-10 lg:mr-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-gradient-to-r from-[#a4e6f3] to-[#ff96ff] p-1 rounded-lg">
          <div className="bg-gradient-to-r from-[#a4e6f3] to-[#ff96ff] p-1 absolute translate-x-[10px] translate-y-[-14px] lg:translate-x-[20px] lg:translate-y-[-25px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-lg overflow-hidden">
            <img
              onMouseEnter={changeBG}
              onMouseLeave={changeBG}
              className="object-fit object-center h-full rounded-md bg-gray-900"
              src={bg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
