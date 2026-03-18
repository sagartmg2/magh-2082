// object destructuring.
let users = [
  {
    firstName: "john",
    lastName: "Doe",
    age: 10,
  },
  {
    firstName: "Rajesh",
    lastName: "Hamal",
    age: 20,
  },
  {
    firstName: "John",
    lastName: "Wick",
    age: 30,
  },
];

function printUserDetailsOld(user) {
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}

function printUserDetails(user) {
  let { age, lastName, firstName } = user; // object destructuring.
  console.log(`name is ${firstName} ${lastName} and age is ${age}.`);
}

printUserDetails(users[0]);
printUserDetails(users[1]);
printUserDetails(users[2]);

printUserDetails({
  firstName: "Alex",
  lastName: "Doe",
  age: 10,
});
