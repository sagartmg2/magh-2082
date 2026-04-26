import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "./components/ui/Button";
import { Plus } from "lucide-react";

export default function TodosCrudApi() {
  const [todos, setTodos] = useState([]);
  const [editableTodo, seteditableTodo] = useState(null); // {id,title,status}

  // axios.post("http://localhost:3000/api/todos",{
  //   title:"mongodb"
  // })

  // axios.put("http://localhost:3000/api/todos/1",{
  //   title:"mongodb"
  // })

  // axios.delete("http://localhost:3000/api/todos/1")

  const fetchData = () => {
    axios.get("http://localhost:3000/api/todos").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3000/api/todos/${id}`)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let title = e.target.title.value;

    // axios
    //   .post("http://localhost:3000/api/todos", {
    //     title: title,
    //   })
    //   .then((res) => {
    //     fetchData();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      let todos = await axios.post("http://localhost:3000/api/todos", {
        title: title,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = (todo) => {
    seteditableTodo(todo);
  };

  const updateTodo = (e) => {
    console.log("udpate todo");
    e.preventDefault();

    // let temp = [...todos];
    // temp[editableTodo].title = e.target.title.value;
    // temp[editableTodo].status = e.target.status.checked;

    // we can use map function as well

    // setTodos(temp);
    // updateLocalStorage(temp);

    axios.put(`http://localhost:3000/api/todos/${editableTodo?.id}`, {
      status: e.target.status.checked,
      title: e.target.title.value,
    });

    // closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="title"
          id="title"
          placeholder="title"
          className="border p-3 disabled:bg-gray-200"
        />
        <Button size="lg" rounded>
           <Plus/> <span>Add</span>
        </Button>
      </form>

      <ul>
        {todos.map((el) => (
          <li key={el.id}>
            {el.id}: {el.title}
            <Button
              size="xs"
              onClick={() => {
                editTodo(el);
              }}
            >
              edit{" "}
            </Button>{" "}
            <Button
              size="xs"
              onClick={() => {
                deleteTodo(el.id);
              }}
            >
              delete
            </Button>
          </li>
        ))}
      </ul>

      {editableTodo != null && (
        <div
          onClick={() => {
            seteditableTodo(null);
          }}
          className={`backdrop bg-black] opacity-50] bg-[rgba(0,0,0,0.5)]  h-screen fixed top-0 right-0 bottom-0 left-0`}
        >
          <form
            onSubmit={updateTodo}
            onClick={(e) => {
              e.stopPropagation();
              // e.preventDefault();
            }}
            className="bg-white w-1/2 mt-16 mx-auto p-4"
          >
            <p>Edit Todo</p>
            <br />
            <input
              // value="react"
              // onChange={(e) =>{e.target.value}}
              defaultValue={editableTodo.title}
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
              defaultChecked={editableTodo.status}
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
    </div>
  );
}
