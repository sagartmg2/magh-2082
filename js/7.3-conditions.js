/* TODO:Write a program that takes a number as input and checks if it is positive, negative, or zero or not a number. 


If it is positive, output "The number is positive." 
If it is negative, output "The number is negative." 
If it is zero, output "The number is zero."
If it is not a number, output "The value is not a number"




OUTPUT:

findPositivity(0) -> the number is zero
findPositivity(100) -> the number is positive
findPositivity(-1) -> the number is negative
findPositivity("hello") -> the value is not a number 

*/

function findPositivity(input) {
  if (typeof input == "number") {
    if (num == 0) {
      return `${num} is 0`;
    } else if (num > 0) {
      return `${num} is positive`;
    } else if (num < 0) {
      return `${num} is negative`;
    }
  } else {
    return "not a avlid number";
  }
}
