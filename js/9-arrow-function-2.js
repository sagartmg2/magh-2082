/* 
  function double(number) {
    return number * 2;
  }

  console.log(double(20));
  console.log(double(29));

*/

// arrow function

const double1 = (number) => {
  let result = number * 2;
  return result;
};

const double2 = (number) => number * 2; //  => itself acts as  return 

const double = number => number * 2;  // in case of single parameter, we can omit the bracket as well 

console.log(double(20));
console.log(double(29));

const sum1 = (firstInput, secondInput) => {
  return firstInput + secondInput;
};

const sum = (firstInput, secondInput) => firstInput + secondInput;

console.log(sum(10, 20));

let addition = sum 

console.log(addition(10, 20));