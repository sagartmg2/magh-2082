let users = [
  {
    name: "ram",
    age: 15,
  },
  {
    name: "hari",
    age: 19,
  },
  {
    name: "shyam",
    age: 20,
  },
  {
    name: "gita",
    age: 21,
  },
  {
    name: "alex",
    age: 22,
  },
];

let matchedUser = users.find((user) => user.age > 20);
// console.log(matchedUser);
// return;

// let newUsers = [];

// users.forEach((user) => {
//   if (user.age > 20) {
//     newUsers[newUsers.length] = user;
//   }
// });

// console.log(newUsers);

/* TODO: create an new array having user of age > 20 only */

let adultUsers1 = users.filter((user) => {
  if (user.age > 20) {
    return true;
  }
  //   return undefined;
});

/* 
    array.filter aways returns a new array
        - cannot modify element.
        - only filters existing element
*/

let adultUsers = users.filter((user) => user.age > 20);

console.log({ adultUsers });
