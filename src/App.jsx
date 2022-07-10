import React from "react";
import Header from "./Header";
import TodoBody from "./TodoBody";
function App() {
  return (
    <>
      <div className=" sm:px-12">
        <Header />
        <h1 className=" sm:px-12 sm:py-7 text-3xl font-bold ">My ToDo list for TODAY</h1>
        <div className="sm:p-12 p-7">
          <TodoBody />
        </div>
      </div>
    </>
  );
}

export default App;
