// closure
// 1
var a = 12;
(function() {
     alert(a);
})();

//2
var a = 5;
(function() {
    var a = 12;
    alert(a);
})();
        
//3
var a = 10;
var x = (function() {
var a = 12;
return (function() {
    alert(a);
});
})();
x();

//4
var a = 10;
var x = (function() {
    var y = function() {
    var a = 12;
    };
    return function() {
    alert(a);
    }
})();
x();

//5
var a = 10;
var x = (function() {
  (function() {
    a = 12; // <<< look carefully at this line.
  })();
  return (function() {
    alert(a);
  });
})();
x();

//6
var a = 10;
(function() {
    var a = 15;
    window.x = function() {
    alert(a);
    }
})();
x();

// Hoisting

//1
function a() {
    var a = 1;
      console.log(a);
      var b = function() {
        console.log(a);
        var c = function() {
            console.log(a);
        }
        c(); // ?
      }
      b(); // ?
    }
  a();  // ?


//2
var a = 1;
function b() {
    a = 10;  return;
    function a() {}
}
b();
console.log(a); // ?


//3
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo()); // ?


//4
function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent()); // ?


//5
alert(foo()); // ?

function foo() {
    var bar = function() {
        return 3;
    };
     return bar();
    var bar = function() {
        return 8;
    };
}

//6
var myVar = 'foo';

(function() {
    console.log('Original value was: ' + myVar); // ?
    var myVar = 'bar';
    console.log('New value is: ' + myVar); // ?
})();

// Classes 04/ 25-26

// Hoisting
// Scope
// Closure

function initilizeData() {
    var myVar = 1;
    return {
      getVar: function () {
        return myVar;
      },
      setVar: function (val) {
        myVar = val;
      },
    };
  }
  
  obj = initilizeData();
  obj.getVar();
  obj.setVar(10);
  obj.getVar();
  
  // setTimeout, clearTimeout and setInterval, clearInterval
  
  // Activity ---------------
  // Q1
  // Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
  // Hint: use setInterval
  // Hint: use clearInterval
  
  // function printNumbers(from, to) {
  //   const interval = setInterval(() => {
  //     console.log(from);
  //     if (from === to) {
  //       clearInterval(interval);
  //     }
  //     from++;
  //   }, 1000);
  // }
  
  // printNumbers(0, 5);
  
  // let from = 1;
  // let to = 5;
  
  // function printNumbers(from, to) {
  
  //   setTimeout(function run() {
  //     console.log(from);
  //     if(from < to) {
  //       setTimeout(run, 1000);
  //     }
  //     from++;
  //   }, 1000);
  // }
  
  // printNumbers(0, 5);
  
  // let i = 0;
  // setTimeout(() => console.log(i), 100); // ? asynchro
  
  // // assume that the time to execute this function is > 100ms
  // for (let j = 0; j < 100000000; j++) {
  //   i++;
  // }
  
  // Q3
  // Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print 	the message “Done” and let the Node process exit.
  // Constraints: You cannot use a setTimeout call for this challenge.
  // Hint: You need a counter.
  // let counter = 0;
  // const intervalId = setInterval(() => {
  //   counter += 1;
  //   console.log('counter', counter);
  //   if (counter === 5) {
  //     console.log('Done');
  //     clearInterval(intervalId);
  //   }
  // }, 1000);
  
  // DEBUGGER -----------
  var a = 1;
  // debugger;
  var b = 10;
  
  // THIS, CALL, BIND, APPLY --------------------
  
  // global context
  console.log(this); // window
  
  // function greet(name) {
  //   alert(`Hello, my name is ${name}.`);
  // }
  // greet('Paul');
  
  // Implicit Binding ----
  const user = {
    name: 'Tyler',
    age: 27,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
  user.greet(); // this = user obejct
  
  const user2 = {
    name: 'Tyler',
    age: 27,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
    mother: {
      name: 'Stacey',
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    },
  };
  
  user2.greet(); // this === user2 object
  user2.mother.greet(); // this === mother object
  
  // Explicit Binding ----
  function greet(l1, l2, l3) {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`and i know ${l1} ${l2} ${l3}`);
  }
  
  const user3 = {
    name: 'Ulan',
    age: 27,
  };
  
  const languages = ['JavaScript', 'Ruby', 'Python'];
  // greet.call(user3, ...languages); // this === user3
  // greet.call(object, arguments)
  // apply
  // greet.apply(user3, languages); // same as call expect how we pass arguments
  
  // bind
  // same as call but only returns new function
  // you can use or call that function later times
  const newFn = greet.bind(user3, languages[0], languages[1], languages[2]);
  // newFn();
  
  // Lexical Binding
  const user4 = {
    name: 'John',
    greet: () => {
      console.log(this.name);
    },
  };
  
  user4.greet();
  
  // USE STRICT
  
  // window.age = 27;
  
  // function sayAge() {
  //   'use strict';
  //   console.log(`My age is ${this.age}`);
  // }
  
  // sayAge(); // TypeError: Cannot read property 'age' of undefined
  
  (function (a, a, b) {
    console.log(a, b);
  })(1, 2, 3); // 2,3
  
  // (function (a, a, b) {
  //   'use strict';
  //   console.log(a, b);
  // })(1, 2, 3);