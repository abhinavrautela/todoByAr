import React from "react";

function Card({ children }) {
  return (
    <>
    <div className="space-y-4 flex flex-col rounded-md shadow-sm">{children}</div>
    </>
  );
}

export default Card;