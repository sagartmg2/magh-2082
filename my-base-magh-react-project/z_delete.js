const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
// const nepaliNamesObj = nepaliNames.map((el) => {
//   return {
//     name: el,
//     email: el + "@gmail.com",
//   };
// });

const nepaliNamesObj = nepaliNames.map((el) => ({
    name: el,
    email: el + "@gmail.com",
}));

console.log(nepaliNamesObj);
