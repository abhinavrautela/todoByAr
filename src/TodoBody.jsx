import { useState } from "react";
import Button from "./Button";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function TodoBody() {
  const [todoForm, showTodoForm] = useState(false);
  const [todoList, setTodoList] = useState(["start your day with 'whatToDo'", " MadeWithLove@_abhinavRautela"]);
  const [doneList, setDoneList] = useState([]);

   console.log(todoList);
  function addTodo(todo){
    const myTodo = [...todoList, todo];
    setTodoList(myTodo);
   }
function Todo() {
    showTodoForm(!todoForm);
  }
  function HideTodoForm() {
    showTodoForm(!todoForm);
  }
  function isDone(todo){
  const newTodoList = todoList.filter(e => e !== todo);
  setTodoList(newTodoList);
  setDoneList([...doneList, todo])
  }
  function isnotDone(todo) {
    const newDoneList = doneList.filter((e) => e !== todo);
    setDoneList(newDoneList);
    setTodoList([...todoList, todo]);
  }
  function onTodoDelete (todo, done){
   if (done){
    setDoneList(doneList.filter(t => t !== todo))
   }else{
    setTodoList(todoList.filter(t => t !== todo));
  }
  }
  

  return (
    <>
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-semibold pb-5">Things To Do</h2>
        <div className="space-y-2">
          {todoList.length < 1 && (
            <h3 className="text-gray-900 text-md font-light">
              {" "}
              Nothing To ToDo :(
            </h3>
          )}
          {todoList.length > 0 &&
            todoList.map((t) => (
              <TodoList
                onStatusChange={isDone}
                key={t}
                ticked={false}
                onTDelete={onTodoDelete}
              >
                {t}
              </TodoList>
            ))}

          {!todoForm && (
            <Button theme="secoundry" onClick={Todo} icon="+">
              Add a Todo
            </Button>
          )}
          {todoForm && (
            <TodoForm onCancleClick={HideTodoForm} onSave={addTodo} />
          )}
          <h2 className="text-xl pt-5 font-semibold">Things Done</h2>
          <div>
            {doneList.map((t) => (
              <TodoList
                onStatusChange={isnotDone}
                key={t}
                ticked={true}
                onTDelete={onTodoDelete}
              >
                {t}
              </TodoList>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoBody;