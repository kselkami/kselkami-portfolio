import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      img: 'https://i.pinimg.com/736x/ae/ca/f7/aecaf7f160540d751589beec3c95d023.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tech: ['React', 'Tailwind', 'NodeJS'],
      demo: 'https://i.pinimg.com/736x/ae/ca/f7/aecaf7f160540d751589beec3c95d023.jpg',
      github:
        'https://i.pinimg.com/736x/ae/ca/f7/aecaf7f160540d751589beec3c95d023.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      img: 'https://i.pinimg.com/564x/6a/ef/19/6aef19eae8ba81352678f2afc0bb1051.jpg',
      description:
        'Praesent ut erat massa. Phasellus laoreet quam in libero eleifend aliquam. Fusce ut ornare eros, vel gravida nulla.',
      tech: ['Vue', 'Bootstrap', 'Firebase'],
      demo: 'https://i.pinimg.com/564x/6a/ef/19/6aef19eae8ba81352678f2afc0bb1051.jpg',
      github:
        'https://i.pinimg.com/564x/18/4e/6c/184e6ce53c6339aab6cef46eee8a700a.jpg',
    },

    {
      id: 3,
      title: 'Project 3',
      img: 'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
      description:
        'Donec vestibulum libero nec mi tincidunt, eu porta metus tempor. Curabitur consequat metus vitae odio mollis efficitur.',
      tech: ['Angular', 'Sass', 'MongoDB'],
      demo: 'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
      github:
        'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
    },

    // {
    //     id: 4,
    //     title: 'Project 3',
    //     img: 'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
    //     description: 'Donec vestibulum libero nec mi tincidunt, eu porta metus tempor. Curabitur consequat metus vitae odio mollis efficitur.',
    //     tech: ['Angular', 'Sass', 'MongoDB'],
    //     demo: 'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
    //     github: 'https://i.pinimg.com/564x/94/0e/37/940e37e6e406f880604fdabfeab24736.jpg',
    // }
  ];

  return (
    <div
      id="projects"
      className="w-full max-w-[560px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] mx-auto flex justify-center mt-32 mb-20"
    >
      <div className="mx-4 flex flex-col md:grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} props={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
