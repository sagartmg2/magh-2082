let user_1 = {
  name: "John",
  address: "kathmandu",
  role: "admin",
};

let user_2 = {
  name: "ram",
  address: "chitwan",
  role: "guest",
};

/*  
    TODO: create a function checkAdminAccess and pass the user as arguement to it

    EXPECTED-OUTPUT:
    
    checkAdminAccess(user_1) // john can create-delete the users
    checkAdminAccess(user_2) // ram can not create-delete the users
    
    */

function checkAdminAccess(user) {
  if (user.role == "admin") {
    console.log(`${user.name} can delete`);
    return;
  }
  console.log(`${user.name} cannot delete`);
}

checkAdminAccess(user_1); // john can create-delete the users
checkAdminAccess(user_2); // ram can not create-delete the users
