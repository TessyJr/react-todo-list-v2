import { useState, createContext } from "react";
import "./App.css";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/TodoList";

export const AppContext = createContext();

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={{ todoList, setTodoList }}>
        <TodoForm />
        <TodoList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
