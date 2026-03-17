/* 

create a function  getMonthName  to get the name of different months. 

   let name =  getMonthName(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me January
    if i pass argument 2, it should give me February
    and so on....

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

function getMonthName1(input) {
  if (input == 1) {
    return "jan";
  } else if (input == 2) {
    return "feb";
  } else if (input == 12) {
    return "dec";
  } else {
    return "not a valid input";
  }
}

function getMonthName(input) {
  let month = "";
  switch (input) {
    case 1: {
      month = "jan";
      break;
    }
    case 2:
      month = "Feb";
      break;
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
      break;
    case 6:
      return "Jun";
      break;
    case 7:
      return "Jul";
      break;
    case 8:
      return "Aug";
      break;
    case 9:
      return "Sep";
      break;
    case 10:
      return "Oct";
      break;
    case 11:
      return "Nov";
      break;
    case 12:
      return "Dec";
      break;
    default:
      return "invalid month";
  }

  return month;
}

//  array
// or
//  object

