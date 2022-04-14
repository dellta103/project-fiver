import React from "react";
import logo from "../logos/fiverr-logo.svg";
export default function Test() {
  return (
    <div className="p-5 rounded-3xl container max-w-lg bg-white min-h-screen">
      <h1 className="display-4 font-semibold text-center ">
        <img
          src={logo}
          alt=""
          style={{
            width: "89px",
            height: "27px",
          }}
        />
      </h1>
    </div>
  );
}
