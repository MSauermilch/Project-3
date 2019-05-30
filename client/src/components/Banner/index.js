import React from "react";

function Banner({ children }) {
  return (
    <div
      style={{ height: 22, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="header-thing"
    >
      {children}
    </div>
  );
}

export default Banner;