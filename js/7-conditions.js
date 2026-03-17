function double(number) {
  let result = number * 2;
  return result; // NOTE: by default functions returns undefined.
}

// console.log(20);
// console.log(double(10));

/* 
    if (<condition>){
        // do something valid for that matched condition
    }else{
        //  do something else
    }

*/

let willRain = false;
let sunny = false;

if (willRain) {
  console.log("take umbrealla");
} else {
  if (sunny) {
    console.log("you might need to take umbrealla");
  } else {
    console.log("no need to take umbrealla");
  }
}

if (willRain) {
  console.log("take umbrealla");
} else if (sunny) {
  console.log("you might need to take umbrealla");
} else {
  console.log("no need to take umbrealla");
}




if (willRain || sunny) {
  console.log("take umbrealla");
} else {
  console.log("no need to take umbrealla");
}





