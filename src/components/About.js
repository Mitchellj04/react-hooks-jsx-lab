import React from "react";
import { image } from "../data/data";

// const divStyle = {
//   position: center; 

// }

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>I am a graduate from the Univeristy of Rhode Island where I majored in Entrprenuership and Innovation.
        Now I am pursuing a career in the computer science field.
      </p>
      <img src={image} alt="I made this"></img>

    </div>
  );
}

export default About;
