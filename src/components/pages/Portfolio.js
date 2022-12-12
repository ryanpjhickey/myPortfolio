import React from 'react';
import projects from './Data';

// 6 projects, map through them to return a component from each project

export default function Portfolio() {
  return (
    <div>
      <h1>Please click any of the images below to be re-directed to their respective github repositorites.</h1>
      {projects.map(project =>
        <div key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.desc}</p>
          <a href={project.link}><img src={project.imgUrl} alt={`${project.name}`} width="200" /></a>
          <hr />
        </div>
      )
      }
    </div >
  );
}
