//01
function upperCase(str) {
    const regex = /^[A-Z]/;
  
    if (regex.test(str)) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }

//02
const email = prompt("Enter email address:");
let emailRegEx = /^[\w\.\-]{3,}@\w+\.\w+$/;
console.log(`Email addres is ${emailRegEx.test(email) ? "valid" : "invalid"}`);

//03
const inputString = "Java Script";
const regex = /(\w+)\s+(\w+)/;
const replacedString = inputString.replace(regex, "$2, $1");

console.log(replacedString); 


//04
function validateCreditCardNumber(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
  }
  
//05
function checkEmail(email) {
    const regex = /^[A-Za-z0-9](?!.*--)[A-Za-z0-9_-]*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    return regex.test(email) ? "Email is correct!" : "Email is not correct!";
  }
  
//06
function checkLogin(input) {
    const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = input.match(/\d+(\.\d+)?/g) || [];
    return regex.test(input) && numbers.length > 0 ? numbers : false;
  }
  