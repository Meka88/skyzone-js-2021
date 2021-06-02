// named export
export const add = (x, y) => console.log(x + y);
export const arrOfNames = ["Ulan", "Max", "Meerim", "Mike", "Jazzy"];

// default export
export default class Person {
  getDetails() {
    console.log("I am a default exported class from util.js");
  }
}
