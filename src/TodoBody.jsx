import { useState } from "react";
import Button from "./Button";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function TodoBody() {
  const [todoForm, showTodoForm] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
   console.log(todoList);
  function addTodo(todo){
    setTodoList([...todoList, todo]);
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

  return (
    <>
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-semibold pb-5">Things To Do</h2>
        <div className="space-y-2">
          {todoList.length < 1 && (
            <h3 className="text-gray-900 text-md font-light">   Nothing To ToDo :(</h3>
          )}
          {todoList.length > 0 &&
            todoList.map((t) => (
              <TodoList onStatusChange={isDone} key={t} ticked={false}>
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
          {doneList.map((t) => (
            <TodoList onStatusChange={isnotDone} key={t} ticked={true}>
              {t}
            </TodoList>
          ))}
        </div>
      </div>
    </>
  );
}
export default TodoBody;