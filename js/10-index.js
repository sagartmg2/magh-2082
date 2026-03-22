let age = 20;

age.age = "twenty";
age = age + 2;
age = [20];

console.log(age);
const PI = 12;
// PI = 13; //ERROR at runtime : constant variable cannot be re-initialized.

const isAdmin = "no"; // string "no" is also a truthy value

if (isAdmin) {
  console.log("allow all access");
}

let email = "         admin@gamil.com   ";
email = email.trim();
console.log(email);
email.toFixed(2);

let numbers = [10, 20, 30];
numbers[3] = "fourty";
