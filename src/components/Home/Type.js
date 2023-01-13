import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Extraordinary problem solver",
          "Web designer",
          "Strong communicator",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 65,
      }}
    />
  );
}

export default Type;
