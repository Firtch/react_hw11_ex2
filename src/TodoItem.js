import React, { useEffect, useState } from "react";

export default function TodoItem({ title, id, completed }) {

    const [checked, setChecked] = useState(completed);

    const cls = ["todo"];
    if(checked) {
        cls.push("completed");
    }

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const raw = localStorage.getItem("todos") || []
        setTodos(JSON.parse(raw))
    }, []);  

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

  return (
    <li className={cls.join(' ')}>
      <label>
        <input type="checkbox" 
        checked={checked} 
        onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>
        <i className="material-icons red-text">delete</i>
      </label>
    </li>
  );
}
