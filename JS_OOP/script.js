
// OOP in JS

const names = ['John', 'Doe', 'Ulan', 'Reece']; // Array

// filter is located inside Array.prototype
const ulan = names.filter((name) => name === 'Ulan');
// console.log(ulan);

// names.whatever(); // Array.prototype doesn't have this method. Fails

/**
 * Constructor Functions
 */

const Cat = function (name, breed) {
  this.name = name;
  this.breed = breed;

  // never do this
  // this.getDetails = function () {
  //   console.log(`${this.name} is a ${this.breed}`);
  // };
};

Cat.prototype.getDetails = function () {
  console.log(`${this.name} is a ${this.breed}`);
};

// instatiate an object from constructor function
const cat1 = new Cat('Leo', 'Begnal');
const cat2 = new Cat('Ais', 'American Shorthair');

console.log(cat1);
console.log(cat2);

console.log(Cat.prototype);

cat1.getDetails();
cat1.toString();

console.log(cat1.__proto__ === Cat.prototype);

// console.log(Object.getPrototypeOf(cat1));
// Prototype is not created for all objects
// It is only available for object that is created by constuctor functions or global Obejct

// __proto__ is available on all object no matter how you create it.
// don't use __proto__. It is just a pointer to the parent prototype.

/**
 * ES6 Classes
 */

class User {
  constructor(name, age) {
    // all these are publice properties
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log('this', this);
    console.log(`My name is ${this.name} and i am ${this.age} old`);
  }
}

// don't do this
// User.prototype.sayHi = function () {
//   console.log(`${this.name} says hi to ya'll`);
// };

// instatiate
let admin = new User('Josh', 30); // admin object
let user = new User('Noah', 24); // user object

// console.log(User.prototype);
console.log(admin);
console.log(user);
user.getDetails();
// admin.sayHi();
// user.sayHi();

// stattic properties of methods

Array.from('foo'); // ['f', 'o', 'o'];
// [10, 1, 2].from(); // fail
// [1, 2, 3].map(); // won't fail

class Person {
  static id = 1; // static field

  constructor(name) {
    this.name = name;
  }
  // regular function
  getInfo() {
    console.log(this);
    console.log(`My name is ${this.name}`);
    console.log(`My name is ${this.id}`); // can not reach static id
  }
  // static function
  static getStaticInfo() {
    console.log(this);
    console.log(`My name is ${this.name}`);
    console.log(`My name is ${this.id}`); // can reach static id
  }
}

const bektur = new Person('Beks');
console.log(bektur);
bektur.getInfo();
// static
// bektur.getStaticInfo(); // fails
Person.getStaticInfo();

Person.id = 1;
console.log(Person.id); // 1
console.log(bektur.id); // undefined

// console.dir(Person);

// ACTIVITY
// Max
// class Car {
//   static color = 'blue';
//   constructor(color, speedLimit) {
//     this.color = color;
//     this.speedLimit = speedLimit;
//   }
//   getColorAndSpeedLimit() {
//     console.log(
//       `The color is ${this.color} and speedlimit is ${this.speedLimit}`
//     );
//   }
//   static getColor() {
//     console.log(`The color is ${this.color}`);
//   }
// }
// const porsche = new Car(`Red`, 245);
// porsche.getColorAndSpeedLimit();
// Car.getColor();

// // Mike
// class Car {
//   static engine = false;
//   constructor(color) {
//     this.color = color;
//   }
//   checkColor() {
//     console.log(`This car is ${this.color} color`);
//   }
//   static engineStart() {
//     this.engine = true;
//     console.log(`Engine idling = ${this.engine}`);
//   }
// }
// const toyota = new Car('white');
// toyota.checkColor();
// Car.engineStart();

// Meerim
// class Car {
//   // static year = 2020;
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   getInfo() {
//     console.log(`My car is ${this.model}`);
//   }
//   static getStaticInfo() {
//     const year = 2005;
//     console.log(`My car made in ${year}`);
//   }
// }
// const car2 = new Car('BMW', 2020);
// car2.getInfo();
// Car.getStaticInfo();

// Subclassing
// parent class
class PersonCL {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and i am ${this.age} old`);
  }
}

// child class
class Customer extends PersonCL {
  constructor(firstName, lastName, age, isPrimeMember) {
    super(firstName, lastName, age);
    this.isPrimeMember = isPrimeMember;
  }
}
const millionaireCustomer = new Customer('Max', 'Svera', 98, 'yes');
console.log(`millionaireCustomer`, millionaireCustomer);
millionaireCustomer.introduce();

class Employee extends PersonCL {
  constructor(firstName, isFulltime, color) {
    super(firstName);
    this.isFulltime = isFulltime;
    this.color = color;
  }
  // overriding parent method
  introduce() {
    console.log(`My name is ${this.firstName} and i like ${this.color}`);
  }
}

const fullTimeEmployee = new Employee('Meerim', true, 'red');
console.log(`fullTimeEmployee`, fullTimeEmployee);
fullTimeEmployee.introduce();

// Activity Max
class Vehicles {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
class Automobile extends Vehicles {
  constructor(make, model, NrOfCarseats) {
    super(make, model);
    this.NrOfCarseats = NrOfCarseats;
  }
}

class Motobike extends Vehicles {
  constructor(make, NrOfCarseats, NrOfWheels) {
    super(make, NrOfCarseats);
    this.NrOfWheels = NrOfWheels;
  }
}

const Mercedes = new Automobile(`Mercedes-Benz`, `S550`, 5);
console.log(Mercedes);

const Harley = new Motobike(`Davidson`, 2);
console.log(Harley);

console.log(Mercedes instanceof Vehicles);
console.log(Harley instanceof Motobike);
console.log(Harley instanceof Vehicles);




//Activity 1
class Car {
    static year = 2020;// needs to be to get from static
    constructor(model){
        this.model = model;
  //      this.year = year;
    }
    getInfo() {
        console.log(`My car is ${this.model}`);
    }
    static getStaticInfo(){
        const year = 2018;
        console.log(`My car made in ${this.year}`);
    }
}

const car2 = new Car('BMW', 2020);
car2.getInfo();
Car.getStaticInfo();

//Activity 2
class Person {
   constructor(name, lastName, age) {
       this.name = name;
       this.lastName = lastName;
       this.age = age;
   } 
   introduce() {
       console.log(`My name is ${this.name} ${this.lastName} and I am ${this.age} years old`);
   }
}

class Driver extends Person {
    constructor(name, age, experience) {
        super(name, age);
        this.experience = experience;
    }
    introduce() {
        console.log(`My name is ${this.name}, i am ${this.age} and have ${this.experience} years of driving experience`);    
    }
}

const Customer = new Driver('Tom', 23, 3);
console.log(Driver);