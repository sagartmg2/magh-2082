const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

/* 
    array.map function 
    - returns exactly same length array as the orginal arary 
    - modify the element of exisging array

*/
const newUsers = nepaliNames.map((name, index) => {
  return {
    name: name,
    email: `${name}@gmail.com`,
    password: `${name}${index}`,
  };
  return undefined;
  return name;
  return "new modified element";
});

console.log(newUsers);

let numbers = [1, 2, 3, 4];

let doubledNumbers = numbers.map((el) => {
  return el * 2;
});

doubledNumbers = numbers.map((el) => el * 2);

console.log(doubledNumbers);

// .reduce

/* 

TODO: 
    From the above array create an new array of users with email and password 
    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/
