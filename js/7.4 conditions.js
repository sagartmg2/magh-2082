let users = [
  { name: "ram", percentage: 39.999 },
  { name: "sita", percentage: 50 },
  { name: "hari", percentage: 40 },
];

// 40 and > pass
// 40 and < fail

/*  EXPECTED-OUTPUT:

    ram has failed
    sita has passed 
    hari has passed 

*/

function checkResult(index) {
  let user = users[index];
  if (user.percentage >= 40) {
    return `${user.name} has passed`;
  } else {
    return `${user.name} has failed`;
  }
}

console.log(checkResult(0));
console.log(checkResult(1));
console.log(checkResult(2));
