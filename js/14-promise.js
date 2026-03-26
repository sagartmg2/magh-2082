/* 
    synchronous

    asynchronous  (runs in background | non-blocking tasks.)
        - seTimeout
        - Promise: 
            - pending
            - resolved
            - rejected 


    exception handling | error handling

*/

console.log("start");

// let number1 = 1;
// let number2 = 2;
try {
  let sum = number1 + number2;
  console.log({ sum });
} catch (err) {
  console.log("ERROR:", err.message);
}

// setTimeout(() => {
//   console.log("do something ");
// }, 3000);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("product created");
    // reject("title is required | server error");
  }, 3000);
});

console.log(promise); // pending

promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

promise
  .then((response) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("product created");
      }, 3000);
    });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
