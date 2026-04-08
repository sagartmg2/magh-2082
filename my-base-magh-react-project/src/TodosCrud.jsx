import React from "react";

export default function TodosCrud() {
  return (
    <div>
      <h1>Todos Crud</h1>

      <br></br>
      <br></br>
      <form>
        <input placeholder="title" className="border p-3" />
        <button>submit</button>
      </form>
      <br />
      <br />

      <ul className="list-disc pl-10">
        <li>HTML (completed)</li>
        <li>CSS (completed)</li>
        <li>React (pending)</li>
        <li>React (pending)</li>
      </ul>
    </div>
  );
}
