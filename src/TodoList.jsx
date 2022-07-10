import React from "react";
import Input from "./Input";
function TodoList({ children, ticked, onStatusChange }) {
  let myClass;
  if ( ticked === true ){
     myClass = " line-through font-normal"
   }
  return (
    <>
      <div className="space-x-3">
        <Input
          inputType="checkbox"
          className="rounded-sm w-4 h-4 border border-gray-500 text-yellow-500 focus:ring-yellow-500"
          value={children}
          onChange={() => onStatusChange(children)}
          checked={ticked}
        />
        <span className={`text-sm font-semibold ${myClass}`}>{children}</span> 
      </div>
    </>
  );
}

export default TodoList;
