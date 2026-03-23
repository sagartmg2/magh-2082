export {};

/* 





*/

function findTriple(inputNumber: number) {
  console.log(`3 X ${inputNumber} =`, 3 * inputNumber);
}

findTriple(5);
// findTriple("10");  //ERROR:
// findTriple("ten");  //ERROR:
// findTriple();  //ERROR:
findTriple(10);

function sum(firstNumber: number, secondNumber: number): void {
  console.log(`${firstNumber} + ${secondNumber} =`, firstNumber + secondNumber);
}

sum(4, 5);
sum(50, 6);
// sum(50);  // ERROR:
// sum();  // ERROR:
// sum();  // ERROR:
// sum(5,"5");  // ERROR:

function calculateSum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

calculateSum(5, 5);

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

let users: User[] = [
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

function printUserDetails(user: User) {
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}

printUserDetails({
  firstName: "john",
  lastName: "Doe",
  age: 10,
});

printUserDetails(users[0]);
printUserDetails(users[1]);
printUserDetails(users[2]);
// printUserDetails(); // ERROR
// printUserDetails(0); // ERROR
