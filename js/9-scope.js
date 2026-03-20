/* var vs let vs const */

// let and const are block scope variables

if (true) {
  let number = 100;
  console.log(number);
  const PI = 3.14;
  console.log(PI );
}


if (true) {
  var number = 100;
  var PI = 3.14;
}


console.log(number);
console.log(PI );

