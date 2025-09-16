import React from "react";

const GooEffect = () => {
  return (
    <>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="name" />
            <feColorMatrix
              in="name"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 15 -10"
              result="b"
            />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>
      </svg>

      <div className="wrapper">
        <div id="container">
          <p className="text">DROP</p>
          <div className="drop"></div>
        </div>
      </div>
    </>
  );
};

export default GooEffect;