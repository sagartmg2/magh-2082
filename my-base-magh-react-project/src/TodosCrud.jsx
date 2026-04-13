import React from "react";
import { useState } from "react";
import Button from "./Button";
import { Pencil, Trash } from "lucide-react";
import TodosCount from "./TodosCount";

export default function TodosCrud() {
  // const [todos, setTodos] = useState([
  //   {
  //     title: "react",
  //     status: false,
  //   },
  //   {
  //     title: "css",
  //     status: true,
  //   },
  // ]);

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [] );

  const [ediableTodoIndex, setEediableTodoIndex] = useState(null); // 0

  const handleSubmit = (e) => {
    e.preventDefault();
    // let title = document.getElementById("title").value;

    let title = e.target.title.value;

    // todos.push(title); // ERROR: cannot change state vairable directly
    // console.log(todos);

    // let tempTodos = [...todos]; // ERFERENCE variable
    // tempTodos.push(title);
    // setTodos(tempTodos);

    setTodos([...todos, { title: title, status: false }]); // not synchronous

    // console.log(todos); // we wont get the updated todos here
    updateLocalStorage([...todos, { title: title, status: false }]);
  };

  const updateLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const deteleTodo = (index) => {
    console.log("delete index", index);

    // todos.splice(index,1)
    // console.log(todos);
    // setTodos([...todos])

    let tempTodos = [...todos];
    tempTodos.splice(index, 1);
    //  instead of splice, we can use filter as well
    setTodos(tempTodos);

    // updateLocalStorage(todos)  // wrong
    updateLocalStorage(tempTodos);
  };

  const editTodo = (index) => {
    console.log("edit todos", index);
    setEediableTodoIndex(index);
  };

  const updateTodo = (e) => {
    e.preventDefault();

    let temp = [...todos];
    temp[ediableTodoIndex].title = e.target.title.value;
    temp[ediableTodoIndex].status = e.target.status.checked;

    // we can use map function as well

    setTodos(temp);
    updateLocalStorage(temp);
    closeModal();
  };

  function closeModal() {
    setEediableTodoIndex(null);
  }

  let storedTodos = JSON.parse(localStorage.getItem("todos"))
  // setTodos(storedTodos)

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
            onSubmit={updateTodo}
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
              defaultValue={todos[ediableTodoIndex].title}
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
              defaultChecked={todos[ediableTodoIndex].status}
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
