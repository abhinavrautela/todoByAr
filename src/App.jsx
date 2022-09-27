import React from "react";
import Header from "./Header";
import TodoBody from "./TodoBody";

function App() {
  return (
    <>
      <div className="sm:px-12 bg-gradient-to-r from-purple-500 to-pink-500 h-screen ">
        <Header />
        <div className="sm:pt-5">
          <div>
            <h1 className=" sm:px-12 sm:py-7 text-3xl font-bold p-7 inline-block">
              My ToDo list for TODAY ;)
            </h1>
            <div className="sm:p-12 p-7 ">
              <TodoBody />
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;
