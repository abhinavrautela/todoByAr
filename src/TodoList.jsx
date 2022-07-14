import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Input from "./Input";
function TodoList({ children, ticked, onStatusChange, onTDelete }) {
  let myClass;
  if (ticked === true) {
    myClass = " line-through font-normal";
  }
  if (ticked === false) {
    myClass = " underline";
  }
   const onDelete = () =>{
    onTDelete(children, ticked)
  }
  return (
    <>
      <div className="space-x-3 flex ">
        <Input
          inputType="checkbox"
          className="rounded-sm w-4 h-4 border border-gray-500 text-yellow-500 focus:ring-yellow-500"
          value={children}
          onChange={() => onStatusChange(children)}
          checked={ticked}
        />
        <span className={`text-sm font-semibold ${myClass}`}>{children}</span>
        <RiDeleteBin6Fill className="self-center" onClick={onDelete} />
      </div>
    </>
  );
}

export default TodoList;
