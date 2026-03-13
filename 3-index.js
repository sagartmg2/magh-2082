let color = "white";
color = "red";
console.log(color);

// let user;
// console.log(user); // undefined

// let course = "mern-stack";

let mernCourse = {
  title: "mern-stack",
  price: 1000,
  duration: "3 months",
  durationInMonths: 3,
  topics: {
    html: {
      durationInDays: 2,
    },
    css: {
      durationInDays: 10,
    },
    js: {
      durationInDays: 15,
    },
  },
};

let product = {
  title: "keywobard",
  price: 1000, // chnge this to 4000
  discountedPrice: 800,
  description: "lorem impusm......",
  stock: 10,
  dimensions: {
    width: 9.26,
    height: 22.47,
    depth: 27.67,
  },
  dimensionsUnit: "inch",
};

product.sku = "23423";

console.log("before product: ", product);
console.log("before product price: ", product.price);
product.price = 4000;
console.log("after product price: ", product.price);
console.log("after product: ", product);

let course = "mern";
let course2 = "python";
let course3 = "data-science";
let course4 = "QA";
let course5 = "marketing";

//  20 other courses...

// let courses = {
//   title: "mern",
//   title: "python",
// };

// let courses = {
//   title: "mern",
//   title: "python",
// };

/* 




    Array:  collection of multiple values of similar data-types


    indexing : always starts with index 0

*/

let courses = ["mern", "python", "science", "QA", "marketing"];
console.log({ courses });

console.log("couse index 0: ", courses[0]);
console.log("couse index 1: ", courses[1]);
console.log("couse index 2: ", courses[2]);
console.log("couse index 3: ", courses[3]);
console.log("couse index 4: ", courses[4]);
console.log("couse index 5: ", courses[5]);

courses[2] = "data-scienece";
console.log("after", { courses });

let user = "ram";
let user1 = "hari";
let user2 = "sita";
let user3 = "gita";
let user4 = "john";
let user5 = "alex";

// let users = {
//   name: "ram",
//   name: "hari",
// };

let users = ["ram", "hari", "sita", "gita", "john", "alex"];
// console.log({"users":users});
console.log({ users });

let numbers = [2, 4, 6, 8, "ten", null, undefined, { value: 12 }];
console.log(numbers);
