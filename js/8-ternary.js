let willRain = false;
let sunny = true;

if (willRain) {
  console.log("take umbrealla");
} else if (sunny) {
  console.log("you might need to take umbrealla");
} else {
  console.log("no need to take umbrealla");
}

// if (willRain || sunny) {
//   console.log("take umbrealla");
// } else {
//   console.log("no need to take umbrealla");
// }



console.log(willRain ? "take umbrealla" : "no need");

console.log(willRain ? "take umbrealla" : (sunny ? "you might need to take umbrella" : "no need to"  ) );
