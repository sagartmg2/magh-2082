/* 
    nodejs: chrme v8 engine

    global objects
        - console
        - setTimeout
        - setInterval
        - require
        - module


    module
        - global 
            - fs
            - path
            - http
        - local 

        - third party module
            - bcrypt
            - axios
            - cors


*/

// console.log("conntecte to inex.js");

// alert("conncted");
// prompt('')
// let status = confirm('are you sure?')

const fs = require("fs"); // global module
const path = require("path"); // global module
const http = require("http");

const bcrypt = require("bcrypt"); // third-party module
const axios = require("axios"); // third-path module

// const register = require("./auth");
// const signup = require("./auth");

const auth = require("./auth"); // local module
const { login, signup } = require("./auth"); // local module

fs.writeFileSync("newfile.log", "this is my frsh log.");

let dbUsers = [
  {
    eamil: "buyer@gmai.com",
    password: "password",
  },
];

// register("buyer@gmail.com", "passowrd");
// signup("buyer@gmail.com", "passowrd");

auth.signup("buyer@gmail.com", "passowrd");
auth.login("buyer@gmail.com", "passowrd");


signup("buyer@gmail.com", "passowrd");
login("buyer@gmail.com", "passowrd");

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log(res.data);
});
