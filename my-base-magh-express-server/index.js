const cors = require("cors");
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5439/postgres",
  {
    logging: true,
  },
);

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    // await sequelize.sync({ alter: true, force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

// sequelize
//   .authenticate()
//   .then((succ) => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

const app = express();
const port = 3000;
app.use(cors()); // middleware

app.use(express.json()); //

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "users",
    underscored: true,
  },
);

const Todo = sequelize.define(
  "Todo",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    tableName: "todos",
    underscored: true,
  },
);

// assume it as database
// let todos = [
//   { id: 1, title: "react", status: false },
//   { id: 2, title: "css", status: true },
// ];

app.get("/api/todos", async (req, res) => {
  let todos = await Todo.findAll();
  console.log(todos);
  res.send(todos);
});

app.post("/api/todos", async (req, res) => {
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

  if (parseInt(req.body.title)) {
    return res.status(400).send({
      msg: "Bad request",
      errors: [
        {
          field: "title",
          msg: "title must be a text ",
        },
      ],
    });
  }

  let todo = await Todo.create({
    title: req.body.title,
  });

      console.log(todos)
  res.send({ msg: "todos created", todo: todo });
});

app.put("/api/todos/:id", async (req, res) => {
  // console.log(todos[req.params.id]);
  console.log(req.params.id);
  await Todo.update(
    {
      title: req.body.title,
      status: req.body.status,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  );

  // todos = todos.map((el) => {
  //   if (el.id == req.params.id) {
  //     return { ...el, status: req.body.status, title: req.body.title };
  //   }
  //   return el;
  // });

  res.send("todos updated");
});

app.delete("/api/todos/:id", async (req, res) => {
  // let a = b + c;
  // todos = todos.filter((todo) => {
  //   return todo.id != req.params.id;
  // });

  await Todo.destroy({
    where: {
      id: req.params.id,
    },
  });

  // let todo = await Todo.findByPk(req.params.id)
  // await  todo.destroy()

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
