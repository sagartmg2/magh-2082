/* return  */

console.log(typeof 123);
console.log(typeof "hello");

function double(number) {
  return number * 2;
}

console.log(double(2));

function sum(firstNumber, secondNumber) {
  console.log(`${firstNumber} + ${secondNumber} =`, firstNumber + secondNumber);
}

sum(4, 5);
sum(double(2), 5);

sum(50, 6);
sum(double(25), 6);
sum(double(25), double(3));
