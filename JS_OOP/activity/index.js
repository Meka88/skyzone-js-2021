// Activity
// #1
/*
1) Create a "Course" class which has three properties: "title", "length" and "price" (all set up in the constructor). 
Instantiate the class twice (two dummy courses of your choice). Output the objects to the console.
 2) Add two methods to the "Course" class: A method which calculates the length/price value ("how much length do you get for the amount paid") 
 and one method that outputs a nice course summary (including title, length and price). Call these methods thereafter (and output the result to the console).
3) Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse". Both should be based on the "Course" class but "PracticalCourse" should also have a "numOfExercises" property, 
"TheoreticalCourse" should have a "publish()" method (which just prints something to the console). Instantiate both and use the new AND old properties and methods.
 4) Use getters and setters to ensure that the "price" property can only be set to a positive value and is returned with a "$" in front of it.
 */
class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }
    introduce() {
        console.log('this', this);
        console.log(`${this.title} courses last ${this.length} month and cost $ ${this.price} per month`);
    }
    
} 
const course1 = new Course('FreeForm', 6, 75);
const course2 = new Course('Languier', 3, 125);
console.log(course1);
console.log(course2);
course1.introduce();
course2.introduce();


class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}
const courseForFun = new Course('Rhyme', 3, 25, 50);
console.log('courseForFun', courseForFun);


class TheoreticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price, numOfExercises);
        this.numOfExercises = numOfExercises;
    }
    publish() {
        console.log(`Our ${title} offer nice discounts`);
    }
}
const newCourse = new TheoreticalCourse('Introduction to Art', 6, 20, 100);
console.log('newCourse', newCourse);
newCourse.introduce();
//newCourse.publish();

// #2
//  1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

//3. Implement a 'brake' method that will decrease the car's speed by 5,and log the new speed to the console

//4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
//Data:  
//§ Data car 1: 'BMW' going at 120 km/h
//§ Data car 2: 'Mercedes' going at 95 km/h

const Car = function(model, speed) {
    this.model = model;
    this.speed = speed;

}
Car.prototype.getDetails = function() {
    console.log(`My car is ${this.model} and easely gets to ${this.speed} km/h`);
};
const car1 = new Car(2018, 120);
console.log(car1);
car1.getDetails();

car1.accelerate = function() {
    return this.speed 
};



 // Your tasks:
// 1. Re-create Challenge#1, but this time using an ES6 class(call it 'CarCl')

// 2. Add a getter called' speedUS' which returns the current speed in mi/h (divide by 1.6)

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h(but converts it to km/h before storing the value, by multiplying the input by 1.6)

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

 // Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    getDetails(){
        console.log('this', this);
        console.log(`My car is ${this.model} and goes up to ${this.speed} km/h`)
    }
}
let car2 = new CarCl('Ford', 120);
console.log(car2);
car2.getDetails();













 // Your tasks:
 /*1. Use a constructor function to implement an ElectricCar(called'EV')as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

 3. Implement an 'accelerate' method that will increase the car's speedby 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉

 // Test data:
 § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%*/

const ElectricalCar 















  // Your tasks:
  /*1. Re-create Challenge#3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

  2. Make the 'charge' property private

  3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

  // Test data:
  § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%*/