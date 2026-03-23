function findTriple(inputNumber) {
  console.log(`3 X ${inputNumber} =`, 3 * inputNumber);
}

findTriple(5);
findTriple(" ten ");
findTriple(15);
findTriple();




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



function printUserDetails(user) {
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}

printUserDetails();
printUserDetails(users[0]);
printUserDetails(users[1]);
printUserDetails(users[2]);