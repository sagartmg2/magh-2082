import React from "react";
import { useState } from "react";

export default function TodosCrud() {
  const [todos, setTodos] = useState(["react", "html"]);

  // const[] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    console.log(title);
    console.log(title);

    // todos.push(title); // ERROR: cannot change state vairable directly

    let oldTodos = [...todos]; // ERFERENCE variable
    oldTodos.push(title);
    console.log(oldTodos);

    setTodos(oldTodos);
  };

  return (
    <div>
      <h1>Todos Crud</h1>

      <br></br>
      <br></br>
      <form>
        <input id="title" placeholder="title" className="border p-3" />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          submit
        </button>
      </form>
      <br />
      <br />

      <ul className="list-disc pl-10">
        {todos.map((el) => {
          return <li>{el} (completed)</li>;
        })}
      </ul>
    </div>
  );
}
