import axios from "axios";
import React from "react";

export default function TodosCrudApi() {
  axios.get("http://localhost:3000/api/todos").then((res) => {
    console.log(res.data);
  });

  axios.post("http://localhost:3000/api/todos",{
    title:"mongodb"
  })

  axios.put("http://localhost:3000/api/todos/1",{
    title:"mongodb"
  })
  
  axios.delete("http://localhost:3000/api/todos/1")


  return (
    <div>
      <ul>
        <li>react</li>
        <li>css</li>
        <li>js</li>
      </ul>
    </div>
  );
}
