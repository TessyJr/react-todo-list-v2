import "./TodoList.css";
import { useState } from "react";
import TodoListTab from "./todo-list-tab/TodoListTab";
import TodoListItems from "./todo-list-items/TodoListItems";

const TodoList = ({ todoList, setTodoList }) => {
  const [isTabCompleted, setIsTabCompleted] = useState(false);

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <TodoListTab
        isTabCompleted={isTabCompleted}
        setIsTabCompleted={setIsTabCompleted}
      />

      <TodoListItems
        todoList={todoList}
        setTodoList={setTodoList}
        isTabCompleted={isTabCompleted}
      />
    </div>
  );
};

export default TodoList;
