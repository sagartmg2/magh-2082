/* hoisting:
        var keyword
        function 
*/

console.log({ color });
var color = "red";

let users = [];

// users[0] = { name: "ram", age: 21, address: "kapan" };
// users[1] = { name: "shyam", age: 22, address: "bagbazar" };
// users[3] = { name: "sita", age: 22, address: "bagbazar" };
// users[4] = { name: "alex", age: 22, address: "bagbazar" };

// function addNewUser(name, age, address) {
//   users[users.length] = { name, age, address };
// }

const addNewUser = (name, age, address) => {
  users[users.length] = { name, age, address };
};

addNewUser("hari", 22, "jamal");
addNewUser("alex", 22, "jamal");
addNewUser("ram", 21, "kapan");
addNewUser("shyam", 22, "bagbazar");
addNewUser("sita", 22, "jamal");
addNewUser("raju", 22, "jamal");

console.log(users);

/* 
    EXPECTED-OUTPUT:

    [
        { name: 'ram', age: 21, address: 'kapan' },
        { name: 'shyam', age: 22, address: 'bagbazar' },
        { name: 'hari', age: 22, address: 'jamal' }
        { name: 'sita', age: 22, address: 'jamal' }
    ]

*/

// function addNewUser(name,age,address) {

// }
