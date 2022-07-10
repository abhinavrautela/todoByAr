import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

function TodoForm({ onCancleClick, onSave }) {
  const [inputValue, updateInputValue] = useState("");

  function inputChange(e) {
    updateInputValue(e.target.value);
  }
  function save() {
    if (inputValue === "") {
      return;
    }
    onSave(inputValue);
    updateInputValue("");
  }
  return (
    <Card>
      <div className="space-y-4 flex flex-col">
        <h1 className="text-lg">Create a Todo</h1>
        <div>
          <Input
            placeholder="Enter your ITEMS"
            inputType="text"
            value={inputValue}
            onChange={inputChange}
            className="p-2 border border-yellow-500 rounded-lg"
          />
        </div>
        <div className="space-x-4">
          <Button theme="secoundry" onClick={save}>
            Save
          </Button>
          <Button theme="primary" onClick={onCancleClick}>
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TodoForm;