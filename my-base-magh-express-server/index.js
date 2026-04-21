const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors()); // middleware

app.use(express.json()); //

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// assume it as database
let todos = [
  { id: 1, title: "react", status: false },
  { id: 2, title: "css", status: true },
  { id: 3, title: "mongdob", status: true },
  { id: 4, title: "postress", status: true },
  { id: 5, title: "node-js", status: true },
  { id: 6, title: "express-js", status: true },
  { id: 7, title: "tailwind-js", status: true },
  { id: 8, title: "rabbitmq", status: true },
  { id: 9, title: "redis", status: true },
];

let highestId = 5;

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  console.log(req.body);

  if (!req.body.title) {
    return res.status(400).send({
      msg: "Bad request",
      errors: [
        {
          field: "title",
          msg: "title is required",
        },
      ],
    });
  }

  highestId++;

  todos.push({
    // id: todos.length + 1,
    id: highestId,
    title: req.body.title,
    status: false,
  });
  res.send({ msg: "todos created" });
});

app.put("/api/todos/:id", (req, res) => {
  console.log(todos[req.params.id]);
  console.log(req.params.id);

  todos = todos.map((el) => {
    if (el.id == req.params.id) {
      return { ...el, status: req.body.status, title: req.body.title };
    }
    return el;
  });

  res.send("todos updated");
});

app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((todo) => {
    return todo.id != req.params.id;
  });

  res.send("todos delete");
});

app.get("/api/products/", (req, res) => {
  res.send([
    { id: 1, title: "mouse" },
    { id: 2, title: "keyboard" },
    { id: 3, title: "keyboard" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
