import "./TodoForm.css";
import { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  const handleTodoInputValue = (event) => {
    setTodoInputValue(event.target.value);
  };

  const handleAddTodoList = () => {
    const todoListItem = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: todoInputValue,
      isCompleted: false,
    };

    if (todoInputValue !== "") {
      setTodoList([...todoList, todoListItem]);
      setTodoInputValue("");
    }
  };

  return (
    <div className="todo-form-container">
      <input
        onChange={handleTodoInputValue}
        className="todo-form-input"
        type="text"
        placeholder="Input Todo Item"
        value={todoInputValue}
      />

      <button className="todo-form-button" onClick={handleAddTodoList}>
        Submit
      </button>
    </div>
  );
};

export default TodoForm;
