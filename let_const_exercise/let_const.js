// Exercise 1:
// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
PI = 42;

// Quiz:

// What is the difference between var and let?
// You can redeclare and reassign values with var and the var keyword scopes a variable to that function. Additionally, var will hoist to the top of the scope it is defined in. let is block scoped so it only exists inside a code block. It can be reassigned and can mutate, but it can not be redeclared.

// What is the difference between var and const?
// The const keyword prevents a variable from ever being reassigned or redeclared, but it can still mutate. It is also block-scoped. Where as var can be reassigned. redeclared, and can mutate.


// What is the difference between let and const?
// The difference between let and const is that you can reassign let, but you cannot reassign const.

// What is hoisting?
// Hoisting is where variables are used before they are declared. It automatically occurs when declaring with var.