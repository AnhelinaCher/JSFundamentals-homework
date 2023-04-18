//task-02
console.log("Kucher");

//task-03
let animal = "cat";
let drink = "milk";
console.log(animal);
console.log(drink);

animal = drink;

console.log(animal);
console.log(drink);

//task-04
let kitten = {
    name: "Luci",                 //string
    toys: 3,                      //number
    age: null,                    //null
    blackColor: true,             //boolean
};
console.log(kitten);
console.log(kitten["hasFleas"]);  //undefined

//task-05
let isAdult = confirm("Вам вже є 18?");
console.log("Повноліття: " + isAdult);

//task-06
let firstName = "Anhelina";
let lastName = "Kucher";
let group;
let yearOfBirth = 1999;
let isMarried = false;

console.log(`My year of birth: ${yearOfBirth}, type: ${typeof (yearOfBirth)}`);
console.log(`Am i married?: ${isMarried}, type: ${typeof (isMarried)}`);
console.log(`My name: ${firstName}, type: ${typeof (firstName)}`);

console.log(group);
let myExpirience = null;
console.log(myExpirience);

//task-07
let login = prompt("Enter your login:");
let email = prompt("Enter your email");
let password = prompt("Enter your password");
console.log(`Hello, your login is ${login}` + ` your email is ${email}` + ` and your password is ${password}`);

//task-08
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 31;

console.log(`Кількість секунд в годині: ${secondsInHour}`);
console.log(`Кількість секунд в добі: ${secondsInDay}`);
console.log(`Кількість секунд в місяці: ${secondsInMonth}`);