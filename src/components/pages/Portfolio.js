import React from 'react';
import projects from './Data';

// 6 projects, map through them to return a component from each project

export default function Portfolio() {
  return (
    <div>
      {projects.map(project =>
        <div key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.desc}</p>
          <img src={project.imgUrl} alt={`${project.name}`} width="200" />
          <hr />
        </div>
      )
      }
    </div >
  );
}
