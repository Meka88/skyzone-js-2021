// named import
// import { add, arrOfNames } from "./util.js";

// add(3, 2);
// console.log(arrOfNames);

// import all / alias
import * as Util from "./util.js";

Util.add(4, 5);
console.log(Util.arrOfNames);

// default import
// no strict name is necessary
import PersonClass from "./util.js";
const user = new PersonClass();
user.getDetails();