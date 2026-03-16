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



console.log(`name is ${users[0].firstName}  ${users[0].lastName} and age is  ${users[0].age}`);
console.log(`name is ${users[1].firstName}  ${users[1].lastName} and age is  ${users[1].age}`);
console.log(`name is ${users[2].firstName}  ${users[2].lastName} and age is  ${users[2].age}`);



/* 
TODO: create a function printUserDetails and re-use it for all users 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick and age is 30.
*/

/* function printUserDetails(index) {
  let user = users[index];
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}
printUserDetails(0);
printUserDetails(1);
printUserDetails(2);
 */

function printUserDetails(user) {
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}

printUserDetails(users[0]);
printUserDetails(users[1]);
printUserDetails(users[2]);

printUserDetails({
  firstName: "Alex",
  lastName: "Doe",
  age: 10,
});
