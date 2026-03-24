// arrow function/
// array functions
// -> forEach
// -> find
// -> map
// -> filter

let users = ["ram", "hari", "shyam", "gita"];

const printElement = (element) => {
  console.log(element);
};

users.forEach(printElement);
// users.forEach(undefined)

let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "task two",
    completed: "false",
  },
  {
    userId: 1,
    id: 3,
    title: "task three",
    completed: true,
  },
];

// todos.forEach(printElement);


for (let index = 0; index < todos.length; index++) {
  console.log(`${todos[index].title} is ${todos[index].completed == true ?"completed" :"incompleted"}`);
}


todos.forEach((el) => {
  console.log(`${el.title} is ${el.completed == true ?"completed" :"incompleted"}`);
});
