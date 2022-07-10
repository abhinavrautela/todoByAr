import React from "react";

function Input({ value, onChange, inputType, placeholder, className, checked}) {
  let inputTYPE;
  if (inputType === "Normal") {
    inputTYPE = "text";
  }
  if (inputType === "checkbox") {
    inputTYPE = "checkbox";
  }
  return (
    <>
      <input
        type={`${inputTYPE}`}
        checked={checked}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
}

export default Input;
