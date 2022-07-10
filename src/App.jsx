import React from "react";
import Header from "./Header";
import TodoBody from "./TodoBody";
function App() {
  return (
    <>
      <div className=" sm:px-12">
        <Header />
        <div className="sm:p-12 p-7">
          <TodoBody />
        </div>
      </div>
    </>
  );
}

export default App;
