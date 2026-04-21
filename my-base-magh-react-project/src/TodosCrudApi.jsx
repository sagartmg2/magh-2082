import axios from "axios";
import React, { useState, useEffect } from "react";

export default function TodosCrudApi() {
  const [todos, setTodos] = useState([]);

  axios.get("http://localhost:3000/api/todos").then((res) => {
    console.log(res.data);
    // setTodos(res.data);
  });

  // axios.post("http://localhost:3000/api/todos",{
  //   title:"mongodb"
  // })

  // axios.put("http://localhost:3000/api/todos/1",{
  //   title:"mongodb"
  // })

  // axios.delete("http://localhost:3000/api/todos/1")

  return (
    <div>
      <ul>
        {todos.map((el) => <li key={el.id}>{el.title}</li>
        )}
      </ul>
    </div>
  );
}
