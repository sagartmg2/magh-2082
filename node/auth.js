const bcrypt = require("bcrypt");

const signup = (email, myPlaintextPassword) => {
  //  hash password befores storing in database
  bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
    console.log(hash);
    // Store hash in your password DB.
  });
};

const login = (email, myPlaintextPassword) => {
  console.log("login");
};




//  default export : 
// module.exports = signup;



//  named export
module.exports = {
  signup: signup,
  login,
};
