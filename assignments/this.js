/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In the global scope, this refers to the global object (the window object).
 * 2. The value of this is usually determined by a functions execution context.
 * 3. When the new keyword is used(a constructor), this is bound to the new object being created.
 * 4. We can set the value of this explicitly with call(), bind(), and apply()
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function greetMe(name) {
  console.log("Hello " + name);
  console.log(this); // Returns Window Object and its props
}

greetMe("John");

//////////////////////////////////
// Principle 2

// code example for Implicit Binding
// look to the left of the dot when the function is invoked

const user = {
  name: "Tyler",
  age: 27,
  greet() {
    alert(`Hello, my name is ${this.name}`);
  }
};

user.greet();

// this here refers to user as it the dot has user to the left of it.

//////////////////////////////////
// Principle 3

// code example for New Binding

function GreetMe(name) {
  this.greeting = "Hello ";
  this.name = name;
  this.speak = function() {
    console.log(this.greeting + this.name);
    console.log(this);
  };
}

var greetJohn = new GreetMe("John");
var greetJane = new GreetMe("Jane");

greetJohn.speak();
greetJane.speak();

//////////////////////////////////
// Principle 4

// code example for Explicit Binding
// Use .bind, .call, .apply

//////////////
// .call
function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`);
}

const user = {
  name: "Tyler",
  age: 27
};

const languages = ["JavaScript", "Ruby", "Python"];

greet.call(user, languages[0], languages[1], languages[2]);

//////////////
// .apply (can use arrays)

greet.apply(user, languages);

//////////////
// .bind (can use arrays)
const newFn = greet.bind(user, languages[0], languages[1], languages[2]);
newFn(); // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"
