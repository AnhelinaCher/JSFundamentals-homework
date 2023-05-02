//01
class Circle {
    constructor(coordinates, radius) {
        this.coordinates = coordinates;
        this.radius = radius;
    }
    getLenth() {
return 2 * Math.PI * this.radius;
    }
    static takeLength(radius) {
return 2 * Math.PI * radius;
    }
    getObjCircle() {
return new Circle(this.coordinates, this.radius);
    }
    static getCoordinates(coordinates, radius) {
return new Circle(coordinates, radius);
    }
    chekPoint() {
const distance = Math.sqrt(
    Math.pow(point.x - this.coordinates.x, 2) + Math.pow(point.y - this.coordinates.y, 2)
  );
  return distance <= this.radius;
    }
    objToString() {
return `Circle with center at (${this.coordinates.x}, ${this.coordinates.y}) and radius ${this.radius}`;
  }
    }

//02
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor);

//03
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
showFullName(); {
    console.log(`${this.name} ${this.surname}`);
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
    super.showFullName();
    console.log(midleName);
}

    showCourse() {
        let currentYear = new Date().getFullYear();
        let course = currentYear - this.year + 1;
        return course;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
stud1.showFullName("Petrovych"); 
console.log("Current course: " + stud1.showCourse()); 

//04
class Marker {
    constructor(color, ink) {
      this.color = color; 
      this.ink = ink; 
    }
  
    showPrint(text) {
      let inkRequired = text.replace(/ /g, '').length * 0.5; 
      if (inkRequired > this.ink) { 
        console.log(`%c${text.slice(0, this.ink * 2)}...`, `color: ${this.color}`);
        this.ink = 0; 
      } else {
        console.log(`%c${text}`, `color: ${this.color}`);
        this.ink -= inkRequired;
      }
    }
  }
  
  class FullMarker extends Marker {
    refillMarker() {
      this.ink = 100;
    }
  }
  
  const marker = new FullMarker('blue', 50);
  marker.showPrint('Print some text'); 
  marker.showPrint('Print some text'); 
  console.log(`Ink left: ${marker.ink}%`); 
  marker.refillMarker(); 
  marker.showPrint('Print some text'); 
  console.log(`Ink left: ${marker.ink}%`); 
  

//05
class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this.showExp;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  get showExp() {
    return this.#experience;
  }

  set showExp(value) {
    this.#experience = value;
  }

  static sortBySalary(workers) {
    return workers.sort((a, b) => {
      return a.dayRate * a.workingDays * a.showExp - b.dayRate * b.workingDays * b.showExp;
    });
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

console.log(worker2.fullName);
worker2.showSalary();
worker2.showSalaryWithExperience();

console.log(worker3.fullName);
worker3.showSalary();
worker3.showExp = 1.7;
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];

let sortedWorkers = Worker.sortBySalary(workers);

console.log("Sorted salary:");
sortedWorkers.forEach(worker => {
  console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
});


