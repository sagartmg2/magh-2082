import React, { useState } from "react";
// useEffect

/* 
    pending
    resolved
    rejected
    eg: fetch todos data from backend via api

  */

/* 
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        //   resolve(["html", "css", "react"]);
        // reject("server error")
        reject("Bad Request: invalid cretions")
        }, 2000);
    }).then((res) =>{
        console.log(res);
    }).catch(err =>{
        console.log(err);
    })

        console.log(promise);
  */

let dataFetched = false;

export default function TodosApi() {
  console.log("render | re-render");

  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState([
    { title: "html" },
    { title: "css", author: { name: "john" } },
  ]);
  // const [todos, setTodos] = useState(undefined);

  console.log({ dataFetched });

  if (!dataFetched) {
    // fetchApiData()
  }

  function fetchApiData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        dataFetched = true;
      });
  }

  return (
    <div>
      <h1>Todos List</h1>
      <button className="border px-3 py-1" onClick={fetchApiData}>
        {" "}
        fetch todos list
      </button>

      <ul className="list-disc pl-10">
        {todos.map((el) => {
          return (
            <li>
              {" "}
              {el.title} ( {el.completed ? "completed" : "pending"} ) -{" "}
              {el.author?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
