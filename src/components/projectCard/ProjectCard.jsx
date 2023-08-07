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
      <span className="font-bold text-sm mb-2"># PF0{props.id}</span>
      <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
      <div
        className={`relative mb-8 bg-black w-full overflow-y-hidden rounded-lg`}
      >
        <img
          className={`w-full object-cover p-8 ${
            index === 0 ? 'h-[400px]' : 'h-full'
          }`}
          src={props.img}
          alt="project 1"
        />
      </div>
      {/* <hr className="mb-6 w-full bg-black py-[1px]" /> */}
      <div className="flex flex-col gap-2 mb-8">
        <span className="text-sm md:text-[18px] lg:text-[24px] font-bold">
          Description:
        </span>
        <p className="text-sm lg:text-[18px] tracking-wide">
          {props.description}
        </p>
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
          className="py-2 px-4 bg-gray-100 border-2 border-black hover:shadow-md hover:shadow-black/40  rounded-md"
          href={props.github}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
