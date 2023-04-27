//01
function sumSliceArray(arr, first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
      throw new Error("Both 'first' and 'second' must be numbers.");
    }
    if (first >= arr.length || second >= arr.length) {
      throw new Error("Both 'first' and 'second' must be less than array length.");
    }
    return arr[first] + arr[second];
  }

//02
function checkAge() {
  let name = prompt("What's your name?");
  let age = prompt("What's your age?");
  let status = prompt("What's your status? (admin, moderator, user)");

  try {
    if (!age) throw new Error("The field is empty! Please enter your age");
    if (isNaN(age)) throw new TypeError("Age must be a number");
    if (age < 18 || age > 70) throw new RangeError("Age must be between 18 and 70");
    switch (status) {
      case "admin":
      case "moderator":
      case "user":
        alert(`Welcome, ${name}! You can watch the movie.`);
        break;
      default:
        throw new EvalError("Invalid status");
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}

checkAge();

//03
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Error: width and height must be numbers!');
    }
    return width * height;
  }
  try {
    const width = 10;
    const height = 'not a number';
    const area = calcRectangleArea(width, height);
    console.log(`The area of rectangle is ${area}`);
  } catch (error) {
    console.error(error.message);
  }

//04
class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  function showMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
    return monthNames[month - 1];
  }
  
  try {
    console.log(showMonthName(5));  
    console.log(showMonthName(14)); 
  } catch (e) {
    if (e instanceof MonthException) {
      console.log(`${e.name} ${e.message}`);
    } else {
      throw e;
    }
  }
  
//05
class UserException extends Error {
    constructor(message) {
      super(message);
      this.name = 'UserException';
    }
  }
  
  function showUser(id) {
    if (id < 0) {
      throw new UserException('ID must not be negative: ' + id);
    }
    return { id: id };
  }
  
  function showUsers(ids) {
    let result = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        let user = showUser(ids[i]);
        result.push(user);
      } catch (e) {
        console.log(e.message);
      }
    }
    return result;
  }
  
  console.log(showUsers([7, -12, 44, 22]));

