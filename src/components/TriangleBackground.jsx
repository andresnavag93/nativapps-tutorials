import React from "react";

const TriangleBackground = ({ rotate = false, size = 300 }) => {
  return (
    <svg
      className={`triangle ${rotate ? "triangle-top" : "triangle-bottom"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={rotate ? "0 0 1440 250" : "0 0 1440 200"}
    >
      <path
        fill="#fff"
        fillOpacity="10"
        d={rotate ? "M0,0L0,250L1440,0L0,0Z" : "M0,0L0,200L1440,0L0,0Z"}
      ></path>
    </svg>
  );
};

export default TriangleBackground;
