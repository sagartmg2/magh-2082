// callback function and asynchronous functions
/* 
    callback:
        a function passed to another function as an argument|parameter

    asynchronous:
        - run itslef in background
        - non - blocking nature.
        - api : 


*/

// synchronous nature  || blocking nature

// function showSomePopup() {
//   console.log("popup shown");
//   return undefined;
// }
const showSomePopup = () => {
  console.log("popup shown");
};

setTimeout(showSomePopup, 5000);

setTimeout(() => {
  console.log("pupup shown 2");
}, 4000);

// suppose this task takes 1 min
for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log("print user name");

let users = ["ram", "hari", "shyam", "gita"];

for (let index = 0; index < users.length; index++) {
  console.log(users[index]);
}

// setTimeout(showSomePopup());  // ERROR
// setTimeout(undefined);  // ERROR
