import React from "react";
import { useState } from "react";
import Button from "./Button";
import { Pencil, Trash } from "lucide-react";
import TodosCount from "./TodosCount";

export default function TodosCrud() {
  const [todos, setTodos] = useState([
    {
      title: "react",
      status: false,
    },
    {
      title: "css",
      status: true,
    },
  ]);

  const [ediableTodoIndex, setEediableTodoIndex] = useState(null);

  // const[] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    // let title = document.getElementById("title").value;

    let title = e.target.title.value;

    // todos.push(title); // ERROR: cannot change state vairable directly
    // console.log(todos);

    // let tempTodos = [...todos]; // ERFERENCE variable
    // tempTodos.push(title);
    // setTodos(tempTodos);

    setTodos([...todos, { title: title, status: false }]);
  };

  const deteleTodo = (index) => {
    console.log("delete index", index);

    // todos.splice(index,1)
    // console.log(todos);
    // setTodos([...todos])

    let tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };

  const editTodo = (index) => {
    console.log("edit todos", index);
    setEediableTodoIndex(index);
  };

  console.log("render | re-render");
  return (
    <div>
      <h1>
        Todos Crud <TodosCount count={todos.length} />
      </h1>

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
        {todos.map((el, index) => {
          return (
            <li key={index}>
              {el.title} ({el.status ? "completed" : "pending"})
              <Button
                onClick={() => {
                  editTodo(index);
                }}
                size="sm"
                rounded
                className="bg-gray-400"
              >
                <Pencil className="inline mr-1" />
                edit
              </Button>
              <Button
                size="sm"
                rounded
                className="bg-red-600"
                onClick={() => {
                  deteleTodo(index);
                }}
              >
                <Trash className="inline mr-1" />
                delete
              </Button>
            </li>
          );
        })}
      </ul>

      {/* popup
      height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    */}
      {ediableTodoIndex != null && (
        <div
          onClick={() => {
            setEediableTodoIndex(null);
          }}
          className={`backdrop bg-black] opacity-50] bg-[rgba(0,0,0,0.5)]  h-screen fixed top-0 right-0 bottom-0 left-0`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target.title.value);
              console.log(e.target.status.checked);
              // TODO:  update state  accordingly
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white w-1/2 mt-16 mx-auto p-4"
          >
            <p>Edit Todo</p>
            <br />
            <input
              // value="react"
              // onChange={(e) =>{e.target.value}}
              defaultValue={" react / css : updated according"}
              name="title"
              id="title"
              placeholder="title"
              className="border p-3 disabled:bg-gray-200"
            />
            <br />
            <br />
            <input
              // checked={true}
              // onChange
              defaultChecked={true}
              id="status"
              name="status"
              type="checkbox"
              className="border p-3 h-5 w-5 disabled:bg-gray-200 mr-3"
            />
            <label htmlFor="status">completed status</label>
            <br />
            <br />
            <Button>update</Button>
          </form>
        </div>
      )}

      {/* <table>
        <td>{el} (completed)</li>
      </table> */}
    </div>
  );
}
