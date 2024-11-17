import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: 'How to Build a Portfolio Website with React',
      image: '/images/howto.png',
      summary: 'Step-by-step tutorial on how to build a website portfolio using React',
      link: 'https://www.freecodecamp.org/news/build-portfolio-website-react/',
    },
    {
      title: 'Build a Stunning Portfolio Website with React JS',
      image: '/images/portfoliodemo.png',
      summary: 'How to build a webiste portfolio with React',
      link: 'https://dev.to/codebucks/build-a-stunning-portfolio-with-react-js-p1',
    },
  ];

  return (
    <section>
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div key={index}>
          <h3>{resource.title}</h3>
          <img src={resource.image} alt={resource.title} />
          <p>{resource.summary}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </section>
  );
};

export default Resources;