//01
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  
  let { first: f, third: x, fifth = "Name №5" } = names;
  
  console.log(f);
  console.log(x);
  console.log(fifth);
  
//02
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let { names: [ , name2, , name4], ages: [ , age2, , age4] } = data;
  
  console.log(name2);
  console.log(age2); 
  console.log(name4);
  console.log(age4);

//03
function mul(...params) {
    let numbers = params.filter(param => typeof param === 'number');
    return numbers.length > 0 ? numbers.reduce((accumulator, currentValue) => accumulator * currentValue) : 0;
  }
  
  console.log(mul(1, "str", 2, 3, true));    
  console.log(mul(null, "str", false, true)); 

//04
function mapBuilder(keysArray, valuesArray) {
    const map = new Map();
    keysArray.forEach((key, index) => {
      map.set(key, valuesArray[index]);
    });
    return map;
  }
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  
  console.log(map.size);   
  console.log(map.get(2)); 
  
//05
let arr = [];

for (let i = 0; i <= 2; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr[0]();             
arr[arr.length - 1]();
