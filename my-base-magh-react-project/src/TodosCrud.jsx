import React from "react";
import { useState } from "react";
import Button, { RoundedButton, SmallButton } from "./Button";
import { Pencil, Trash } from "lucide-react";

export default function TodosCrud() {
  const [todos, setTodos] = useState(["react", "html"]);

  // const[] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    // let title = document.getElementById("title").value;

    let title = e.target.title.value;

    // todos.push(title); // ERROR: cannot change state vairable directly

    // let oldTodos = [...todos]; // ERFERENCE variable
    // oldTodos.push(title);
    // setTodos(oldTodos);

    setTodos([...todos, title]);
  };

  return (
    <div>
      <h1>Todos Crud</h1>

      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          id="title"
          placeholder="title"
          className="border p-3 disabled:bg-gray-200"
        />
        <Button
          // type="button"
          // type="submit"
          // disabled
          // onClick={(e) => {
          //   handleSubmit(e);
          // }}
          size="lg"
          rounded
        >
          <span>Add tag</span>
        </Button>

        {/* <Button size="ms" rounded>
          <span>submit</span>
        </Button>
        <Button size="lg" rounded>
          <span>submit</span>
        </Button>
        <Button rounded>
          <span>submit</span>
        </Button>

        <Button label="submit" />
        <SmallButton label="submit" />
        <RoundedButton label="submit" /> */}
      </form>
      <br />
      <br />

      <ul className="list-disc pl-10">
        {todos.map((el) => {
          return (
            <li>
              {el} (pending){" "}
              <Button size="sm" className="bg-gray-400">
                <Pencil className="inline" />
                edit
              </Button>
              <Button size="sm" className="bg-red-600" onClick={() =>{}} >
                <Trash className="inline" /> delete
              </Button>
            </li>
          );
        })}
      </ul>

      {/* <table>
        <td>{el} (completed)</li>
      </table> */}
    </div>
  );
}
