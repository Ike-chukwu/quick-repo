import React from "react";

function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_503_701"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_503_701)">
        <path
          fill="#241D05"
          d="M3 14.565v-1.893h18v1.893H3zm0-4.732V7.94h18v1.893H3zm0-4.732V3.21h18V5.1H3z"
        ></path>
      </g>
    </svg>
  );
}

export default Hamburger;
