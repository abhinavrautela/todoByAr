import React from "react";

function Header(){
    return (
      <>
        <div className="flex justify-between">
          <h1 className="p-4 text-3xl font-bold flex justify-center sm:block">
            ToDo
          </h1>
          <h1 className="font-medium self-end mr-3">By ABHINAV RAUTELA</h1>
        </div>
        <hr></hr>
      </>
    );
}
export default Header;