let courses: string[] = ["mern", "python", "qa"];
let users: string[] = ["ram", "hari", "shyam"];

/* TODO: Create a function that takes an array and returns the first element. 
    exmple.

    getFirstElement(courses) // EXPECTED-OUTPUT : mern
    getFirstElement(users) // EXPECTED-OUTPUT : ram

*/

// function getFirstElement(inputArray: string[] | number[] | {}[]) {
//   let firstElement = inputArray[0];
//   console.log(firstElement);
// }

function getFirstElement(inputArray: any[]) {
  let firstElement = inputArray[0];
  console.log(firstElement);
}

getFirstElement(courses);
getFirstElement(users);
getFirstElement([5, 4, 3, 2, 1]); // 5
getFirstElement([{ a: 1 }, { a: 2 }, { a: 3 }]); // 5



/* 
    any : same as js

*/
let color: any = { value: "red" };
