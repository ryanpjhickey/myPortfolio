import React from 'react';
import projects from './Data';

// 6 projects, map through them to return a component from each project

export default function Portfolio() {
  return (
    <div class="content">
      <div class="mywork">
        <h1 class="about pheader">Please click any of the images below to be re-directed to their respective github repositorites.</h1>
        {
          projects.map(project =>
            <div class="card2" key={project.name}>
              <h2>{project.name}</h2>
              <p class='moveleft'>{project.desc}</p>
              <a href={project.link}><img class="float-right" src={project.imgUrl} alt={`${project.name}`} width="200" height="140" /></a>
            </div>
          )
        }
      </div >
    </div>
  );
}
