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
  {
    firstName: "John",
    lastName: "Wick",
    age: 30,
  },
  {
    firstName: "John",
    lastName: "Wick",
    age: 30,
  },
];
// console.log(`name is ${users[0].firstName}  ${users[0].lastName} and age is  ${users[0].age}`);
// console.log(`name is ${users[1].firstName}  ${users[1].lastName} and age is  ${users[1].age}`);
// console.log(`name is ${users[2].firstName}  ${users[2].lastName} and age is  ${users[2].age}`);

function printUserDetails(user) {
  console.log(
    `name is ${user.firstName} ${user.lastName} and age is ${user.age}.`,
  );
}

// printUserDetails(users[0]);

/* 
    loop 
        1. for  : when we know start point and number of iterations 

        for(startingPoint; condition ; modifier){
            // do some repeating task. 
        }

        2. while
        3. do-while ()


*/

/* 
    let index = 0

    1. index = index + 1
    or 
    2. index += 1
    or 
    3. index ++

    console.log(index) // 1
 */

for (let index = 0; index < 5; index++) {
  console.log({ index });
  printUserDetails(users[index]);
}

console.log("end");
