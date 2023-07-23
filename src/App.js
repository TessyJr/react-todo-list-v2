import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
