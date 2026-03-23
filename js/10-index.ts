/* 
    typescript types
        - String
        - Number
        - Boolean
        - null
        - undefined

        collections
        - []
        - {}


    enum
    optional
    union
    readonly

*/

let courseName: string = "mern";
courseName = "python";

let firstName: string = "ram";
let lastName: string = "bahadur";
let fullName: string = firstName + lastName;

let colorName = "red"; // type inference
/* 
    let colorName = "red"  

    converted to 

    let colorName:string = "red"  
*/

let age: Number = 20; // type inference
// age = "twenty"; // ERROR: Type 'string' is not assignable to type 'number'
// age = [20]; //ERROR: Type 'number[]' is not assignable to type 'number'

console.log(age);

let isActive: Boolean;
isActive = true;
isActive = false;

const isAdmin: Boolean = false;

if (isAdmin) {
  console.log("allow all access");
}

let data: null = null;

const PI = 12;
// PI = 13; //ERROR at compile: constant variable cannot be re-initialized.

let email = "         ADmin@gamil.com   ";
email = email.toLowerCase().trim();
console.log(email);
// email.toFixed(2)  error: toFixed is a numerical functin. cant be used string

let size: undefined;
// size = "md";

// let numbers = [1, 2, "3", "four"];
let numbers: number[] = [1, 2, 3];
// numbers[3] = "four"; // ERROR

let person: { name: string; age: number } = {
  name: "ram",
  age: 20,
  // isAdmin: true,  // ERROR: isAdmin doesnot exist in person's type
};

console.log(person);



export {};
// treat this file as local module
