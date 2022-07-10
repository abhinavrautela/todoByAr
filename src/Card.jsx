import React from "react";

function Card({ children }) {
  return (
    <>
      <div className="space-y-4 border flex flex-col rounded-xl shadow-sm p-4 bg-gray-400 ">
        {children}
      </div>
    </>
  );
}

export default Card;