import React from "react";

export default function HeadBar() {
  return (
    <div className="head">
      <div className="headbar">
        <div className="headbar--title">
          <h4>My balance </h4>
          <h1> ${Math.floor(Math.random() * 1001)} 22</h1>
        </div>
        <div className="logo">
          <svg
            width="710"
            height="38"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
