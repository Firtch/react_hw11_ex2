import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  // state = {
  //   todos: [
  //     { id: 1, title: "First todo", completed: false },
  //     { id: 2, title: "Second todo", completed: false },
  //   ],
  // };

  const [todos, setTodos] = useState([
    { id: 1, title: "First todo", completed: false },
    { id: 2, title: "Second todo", completed: false },
  ]);

  const [todoTitle, setTodoTitle] = useState("");  

    useEffect(() => {
        const raw = localStorage.getItem("todos") || []
        setTodos(JSON.parse(raw))
    }, []);  

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

  const addTodo = (e) => {
    if(e.key === "Enter") {
      setTodos([
        ...todos, {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle("");
    }
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-field">
        <input 
        type="text" 
        value={todoTitle}
        onChange={e => setTodoTitle(e.target.value)}
        onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>
      {/* <TodoList todos={this.state.todos} /> */
       <TodoList todos={todos} />}
    </div>
  );
}
