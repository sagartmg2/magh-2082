import React from "react";

export default function TodosApi() {
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

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div>
      <h1>Todos List</h1>
      <button className="border px-3 py-1"> fetch todos list</button>
    </div>
  );
}
