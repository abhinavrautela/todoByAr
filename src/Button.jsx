import React from "react";

function Button({ theme, children, onClick, icon }) {
  let themeClass;
  if ((theme === "secoundry")) {
    themeClass = "bg-yellow-500 border-yellow-300 text-white hover:bg-yellow-500 focus:ring-yellow-500";
  } else {
    themeClass = "bg-white  border-gray-400 hover:bg-gray-100 focus:ring-gray-500";
  }
  return (
    <>
      <button
        className={`p-2 text-lg rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${themeClass}`}
        onClick={onClick}
      ><span className="text-md">{icon}</span>
        {children}
      </button>
    </>
  );
}

export default Button;
