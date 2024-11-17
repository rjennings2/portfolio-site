import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Website Deployment Project',
      description: 'Designed and developed a personal website to showcase my skills and background. Utilized HTML for structure, CSS for styling, and JavaScript for interactive elements. The project involved creating a visually appealing site as an end of course project.',
      image: '/images/ryleeanne.png', // Replace with actual image paths
      link: 'https://ryleeanne.ca',
      techList: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'CMS Deployment Project',
      description: 'Deployed a content management system to facilitate efficient website content creation and management, allowing user-friendly updates and organization through a centralized platform.',
      image: '/images/cmspic.png', // Replace with actual image paths
      link: 'https://github.com/rjennings2/FinalProject',
      techList: ['PHP', 'JSON'],
    },
  ];

  return (
    <section>
      <h2>My Work</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </p>
          <h4>Tech Stack:</h4>
          <ul>
            {project.techList.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Work;