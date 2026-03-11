//  re-use
// variable: simply a keyword which can store some valid values
address = "bagbazar";
address = "putalisadak";
let a = 20; // age // ERROR:  donot make random variable. variables should be meaning ful
let age = 20;
isActive = false;
// is admin = true  // error
// is-admin = true  // error: kebab-case
is_admin = true; // snake_case
isAdmin = true; // camelCase // js enviornment
// 1status = "pending"  //  error
// @status = "pending" // error

console.log(address);
console.log(a); // error:
console.log(isActive);
console.log(is_admin);
console.log(isAdmin);

/*  var vs let vs  const

  2015 ES6
    let and const introduced.

    variable declaration and initialization and re-initialziation
*/

var color = "white";
var color = "black";

let size = "md";
size = "lg";
size = "xl";
size = "2xl";

let status = "pending";
status = "accept";
status = "reject";

name = "ram";

const PI = 3.14514;
// PI = 3.14514675;

console.log(PI);

// class  = "one"
const firstName = "ram";

const lastName = "bahadur";
// let fullName = "ram" + " " + "bahadur"; // string concat
let fullName = firstName + " " + lastName; // string concat
console.log(fullName);
