let courses = ["mern", "python", "qa"];
let users = ["ram", "hari", "shyam"];

/* TODO: Create a function that takes an array and returns the first element. 
    exmple.

    getFirstElement(courses) // EXPECTED-OUTPUT : mern
    getFirstElement(users) // EXPECTED-OUTPUT : ram

*/

function getFirstElement(inputArray) {
    let firstElement = inputArray[0]
    console.log(firstElement);
}

getFirstElement(courses);
getFirstElement(users);
getFirstElement([5, 4, 3, 2, 1]); // 5
getFirstElement([{a:1},{b:2},{c:3}]); // 5
