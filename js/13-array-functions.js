let users = ["ram", "hari", "shyam"];

users.unshift("john"); // "optional"
users.push("gita");

let slicedUser = users.slice(1, 3); // "optional"
let filteredUsers = users.filter((el, index) => index >= 1 && index <= 2);

console.log(slicedUser);
console.log(filteredUsers);
console.log(users);

// users.forEach
// users.find
// user.map
// user.filter

// users.every  (optional)
// users.some  (optional)

let numbers = [1, 10, 5, 6];
numbers.splice(1, 1, 2, 3, 4); //
console.log(numbers);


console.log(numbers.indexOf(5));
console.log(numbers.findIndex((el) => el == 5));
