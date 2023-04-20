//01
/*let a = 1;
let b = 2;
let c = 3;

if (a < b && b < c) {
  console.log("Висловлювання істинне");
} else {
  console.log("Висловлювання хибне");
}*/

//02
let x = 1;
let y = 2;

let res1 =  `"${x}${y}"`;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = `"${x < y}${2}"`;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = "x" * "y";
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//03
let isAdult = +prompt("Введіть ваш вік");

if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку");
}
else if (isAdult < 18) {
    console.log("Ви ще надто молоді");
}

//04
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

const countFrequencyOfElement = (inputArr, element) => inputArr.filter(currentElement => currentElement === element).length;

let mostPopularElement = arr.reduce((mostPopularProcessedNumber, currentNumber) => 
  countFrequencyOfElement(arr, mostPopularProcessedNumber) >= countFrequencyOfElement(arr, currentNumber) ? mostPopularProcessedNumber : currentNumber
);

console.log(mostPopularElement);

let newArr = [...arr]; 
newArr.push(mostPopularElement);
newArr = newArr.filter(element => element !== mostPopularElement); 

console.log(newArr); 


//05
function isInvalidInput(...values) {
  return values.some(value => isNaN(value) || value <= 0);
}

const a = parseFloat(prompt("Довжина сторони a трикутника:"));
const b = parseFloat(prompt("Довжина сторони b трикутника:"));
const c = parseFloat(prompt("Довжина сторони c трикутника:"));

if (isInvalidInput(a, b, c)) {
  console.log("Incorrect data");
} else {
 
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  
  console.log(`Площа трикутника: ${area.toFixed(3)}`);
  
  const isRightTriangle = a*a + b*b === c*c || b*b + c*c === a*a || a*a + c*c === b*b;
  
  console.log(`Чи є трикутник прямокутним: ${isRightTriangle}`);
}


//06
let date = new Date();
let hours = date.getHours();

const helloHour = +prompt('Say hello:');

/*switch (helloHour) {
    case (hours >= 23 || hours < 5): 
    console.log("Доброї ночі"); 
    break; 
    case (hours >= 5 && hours < 11): 
    console.log("Доброго ранку"); 
    break;
    case (hours >= 11 && hours < 17): 
    console.log("Доброго дня"); 
    break;
    default:
        console.log("Доброго вечора");
}*/

if (hours >= 23 || hours < 5) {
    console.log("Доброї ночі");
}
else if (hours >= 5 && hours < 11) {
    console.log("Доброго ранку");
}
else if (hours >= 11 && hours < 17) {
    console.log("Доброго дня");
}
else 
    console.log("Доброго вечора");