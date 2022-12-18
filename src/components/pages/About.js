import React from 'react';
import me from '../../me.jpg'


// About me page should include photo of self and comments about self

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={me} width={100} height={100}></img>
      <p>
        Hi my name is Ryan and I enjoy studying Mandarin Chinese, playing board games and video games, and also coding!
      </p>
    </div>
  );
}
