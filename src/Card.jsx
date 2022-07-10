import React from "react";

function Card({ children }) {
  return (
    <>
    <div className="space-y-4 flex flex-col rounded-xl shadow-sm p-4 bg-gray-100">{children}</div>
    </>
  );
}

export default Card;