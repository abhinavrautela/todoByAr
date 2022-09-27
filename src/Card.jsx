import React from "react";

function Card({ children }) {
  return (
    <>
      <div className=" border rounded-xl shadow-sm p-4 bg-gray-400 lg:w-[60%]">
        {children}
      </div>
    </>
  );
}

export default Card;