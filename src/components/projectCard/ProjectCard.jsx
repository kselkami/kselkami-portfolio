import React from 'react';

const ProjectCard = ({ props, index }) => {
  return (
    <div
      className={`w-full flex flex-col my-8 ${
        index === 0
          ? 'col-start-1 col-span-2 max-w-[400px] md:max-w-full'
          : 'max-w-[400px] md:max-w-full'
      }`}
    >
      {/* Title */}
      <span className="font-bold text-[12px] md:text-sm mb-2">
        # PF0{props.id}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{props.title}</h2>

      {/* Body container */}
      <div className="flex flex-col lg:flex-row">
        {/* Image container */}
        <div
          className={`relative bg-black w-full overflow-y-hidden rounded-lg`}
        >
          <img
            className={`w-full object-cover object-top p-8 ${
              index === 0 ? 'h-[400px]' : 'h-full'
            }`}
            src={props.img}
            alt="project 1"
          />
        </div>

        {/* Details container */}

        <div className="flex flex-col m-10 p-6 -mt-12 lg:m-4 lg:-ml-12 z-[1] bg-gray-100 border-4 border-gray-900  rounded-lg">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-sm md:text-[18px] lg:text-[24px] font-bold">
              Description:
            </span>
            <p className="text-sm md:text-md lg:text-lg">{props.description}</p>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm md:text-[16px] lg:text-[18px] font-bold ">
              Tech:
            </span>
            <ul>
              {props.tech?.map((tech) => (
                <li key={tech} className="text-sm lg:text-[18px] tracking-wide">
                  - {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex gap-4 text-sm md:text-[16px] lg:text-[18px] font-bold">
            <a
              className="py-2 px-4 border-2 border-black bg-black text-white  rounded-md"
              href={props.demo}
            >
              Demo
            </a>
            <a
              className="py-2 px-4 bg-gray-100 border-[3px] border-black hover:shadow-md hover:shadow-black/40  rounded-md"
              href={props.github}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
