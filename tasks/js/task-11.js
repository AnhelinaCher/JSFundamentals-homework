//01
function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);
  });

//02
function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      if (!Array.isArray(arr)) {
        reject("Error! Incorrect array!");
      } else {
        const product = arr.reduce(function(acc, curr) {
          if (typeof curr === "number") {
            return acc * curr;
          } else {
            reject("Error! Incorrect array!");
          }
        }, 1);
        resolve(product);
      }
    });
  }
  
  calcArrProduct([3, 4, 5]).then(result => console.log(result)); 
  
  calcArrProduct([5, "user2", 7, 12]).catch(error => console.log(error));

//03
new Promise(function (resolve, reject) {
    const number = prompt("Введіть число:");
  
    if (isNaN(number)) {
      reject("Помилка! Введене значення не є числом.");
    } else {
      resolve(Number(number));
    }
  })
    .catch(function (error) {
      return new Promise(function (resolve, reject) {
        function askNumber() {
          const number = prompt("Введіть число:");
  
          if (isNaN(number)) {
            askNumber();
          } else {
            resolve(Number(number));
          }
        }
  
        askNumber();
      });
    })
    .then(function (result) {
      console.log("Введене число:", result);
    });
  
//04
function delay(i, time) {
    return new Promise(resolve => setTimeout(() => {
      console.log(i);
      resolve();
    }, time));
  }
  
  async function showNumbers() {
    for (let i = 0; i <= 9; i++) {
      const delayTime = Math.random() * 3000;
      await delay(i, delayTime);
    }
    console.log(10);
  }
  
  showNumbers();
  
  
  