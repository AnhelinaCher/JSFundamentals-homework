//01
/*function createArray(start, end) {
    let newArr = [];
    for (let i = start; i <= end; ++i) {
      newArr.push(i);
    }
    return newArr;
  }
  
  let arr = createArray(2, 9);
  console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]

//02
let a = 1;
let b = 10;
let repeatCount = 1;

for (let i = a; i <= b; i++) {
  for (let j = 0; j < repeatCount; j++) {
    console.log(i);
  }
  repeatCount++;
}

//03
function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
      let randomNumber = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNumber);
    }
    return arr;
  }
  
  console.log(randArray(5));

//04

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
function compact(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  console.log(arr2);


//05
let  arr = [5, "Limit", "12", "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

    function groupByType(arr) {
        let numberArr = [];
        let stringArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            numberArr = numberArr.concat(arr[i].filter(item => typeof item === "number"));
            stringArr = stringArr.concat(arr[i].filter(item => typeof item === "string"));
          } else if (typeof arr[i] === "number") {
            numberArr.push(arr[i]);
          } else if (typeof arr[i] === "string") {
            stringArr.push(arr[i]);
          }
        }
        return [numberArr, stringArr];
      }
      console.log(groupByType(arr));
      

//06

function calc(a, b, op) {
  let result;
  switch (op) {
    case 1:
      result = a - b;
      break;
    case 2:
      result = a * b;
      break;
    case 3:
      result = a / b;
      break;
    default:
      result = a + b;
      break;
  }
  return result;
}
console.log(calc(10, 3, 1)); 

//07
function findUnique(arr) {
    const unique = arr.filter((value, index, array) => array.lastIndexOf(value) === index);
    return unique.length === arr.length;
  }*/