import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Programmer",
          "Software Development",
          "Communication and Collaboration",
          "Algorithms and Data Structures",
          "Object-Oriented Design",
          "Teamwork",
          "Full Stack Developer",
          "Web Development",
          "Debugging and Troubleshooting",
          "Testing",
          "Continuous Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 65,
      }}
    />
  );
}

export default Type;
