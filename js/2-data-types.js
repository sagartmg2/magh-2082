/* 
    DATA-TYPES

    Primitive data types
        1. TEXT : STRING
        2. NUMBER
            integer // whole number
            float  // decimal values

        3. true/false : BOOLEAN

        4. empty values: NULL

        5. undefined  // js specific


    non primitive data types Collection
    1. Object

*/

/* declaration and initialzation and re-initialization */
let price = 12.342;
price = 150;

let isAdmin = true;
isAdmin = false;

let firstName;
console.log("firstName is ", firstName);

let data = null;
/*  fetch data from api
    data = apidata
*/

let user = "ram bahadur";
let userPhone = 98345345;
let userAddress = "balaju";
let userPermamanetAddress = "chitwan";
let userAge = 20;

let user2 = "hari bahadur";
let user2Phone = 956345345;
let user2Address = "bagbazar";
let user2PermamanetAddress = "gorkha";
let user2Age = 20;

let user3 = {
  name: "hari bahadur",
  phone: 956345345,
  isActive: true,
  address: {
    permanentAddress: {
      district: "gorkha",
      ward: 4,
    },
    temporaryAddress: {
      district: "gorakh",
      ward: 4,
    },
  },
  age: 20,
};

user3.address.temporaryAddress.district = "gorkha";
user3.address.temporaryAddress.municipality = "gorkha municipality";
console.log("user3 temp adress: ", user3.address.temporaryAddress);

let color = "red";
color = "black";
let colorHex = "#3452";
let colorRgb = "hsla(0, 100%, 50%, 1.00)";

let color2 = "blue";
let color2Hex = "#4452";
let color2Rgb = "rgb(0,0,255)";

/* 
    OBJECT  : similar to real life objects having properties/attributes
    key:value,
    key:value,
    key:value,
    key:value,
*/

let projector = {
  color: "white",
  price: 100000,
  brand: "sony",
  manufacturedAt: "2024-02-02",
  model: "G4-asd",
};

let projector2 = {
  color: "balck",
  price: 10000,
  manufacturedAt: "2024-02-02",
  model: "M4-asd",
  brand: {
    name: "Acer",
    website: "https://acer.com",
    estd: 1990,
    ceo: {
      name: "ceo",
      startFrom: "1994",
    },
  },
};

let prouduct = {
  title: "mouse",
  price: 1000,
  discountedPrice: 800,
  description: "lorem impusm......",
  stock: 10,
};

let product2 = {
  title: "keywobard",
  price: 1000, // chnge this to 4000
  discountedPrice: 800,
  description: "lorem impusm......",
  stock: 10,
};

console.log("before product2", product2);
console.log("prev price", product2.price);
product2.price = 4000;
console.log("after price", product2.price);
console.log("after product2 : ", product2);

console.log("before product2 seller:", product2.seller);
product2.seller = "ram bahadur";
console.log("after product2 seller:", product2.seller);
console.log("after product2 : ", product2);
