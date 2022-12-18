import React from 'react';
// import { Document } from 'react-pdf';
import myResume from '../../myResume.png'
// import Pdf from "react-native-pdf"

//include known languages and also downloadable PDF (make download opt-in + confirmation)

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <p>
        <img src={myResume}></img>
      </p>
    </div>
  );
}
