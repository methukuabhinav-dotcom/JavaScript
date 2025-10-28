// Level 1: Basics of Variables :

// Q1: Declare a variable named age and assign it a value of 20. Print age to the console.
age=20
console.log(age)

//  Q2:Declare three variables in a single line: firstName, lastName, and country. Assign values to
//  these variables and display them.
let firstName="Abhinav"; lastName="Reddy"; country="india"
console.log(firstName,lastName,country)

//  Q3:Create two variables, itemPrice and itemQuantity, assign them numeric values. Print
//  their product as totalCost.
let itemPrice=100
let itemQuantity=5
let totalCost=itemPrice*itemQuantity
console.log("toatalcost:",totalCost)

//  Level 2: Scope and Hoisting

//  Q1:Create a variable name inside a function and try to access it outside the function. Explain
//  why you get an error.
function myfunction(){
    let name="abhinav"  
    console.log(name) //it will work
}
myfunction()
console.log(name) //error will be occoured because the the name is declered in the function scope

// Q2:Declare a variable using var at the bottom of your code. Try to access it at the top of your code and observe the result. Do the same with a let variable. 
console.log(a) //output will be undifined beacuse the a is hoisted
var a=10 // var is hoisted but initialized as undefined.

// console.log(b)//Uncaught ReferenceError: Cannot access 'b' before initialization
let b=10//  let is hoisted but kept in the Temporal Dead Zone (TDZ) until it’s declared.

//  Q3:Write code that creates a variable using var within a function. Then, call the function  and try accessing the variable outside the function. 
function myfunction(){
    let name="abhinav" 
    console.log(name) //it will work
}
myfunction()
console.log(name) //error will be occoured because the the name is declered in the function scope

// Level 3:  Redeclaration, Hoisting, and Scope Conflicts 

//  Q1:Declare a variable using var at the top of your code and redeclare it using let with the  same name. Note any errors or messages in the console.

var x = 5; 
// let x = 10; //  Error: Identifier 'x' has already been declared  
// You cannot redeclare a variable with let or const if it’s already declared using var in the same scope.

// Q2:Write code that uses a const variable in a function and then try to reassign it inside  and outside the function. Explain the results.
 function myfunction(){
    const b=10
    // let b=10 //error:Cannot redeclare block-scoped variable 'b'
 }
 myfunction()
//  var b=10//in const variable we cannot reassign the value once it is declared

//  Q3:Explain, with examples, how JavaScript handles hoisting for function declarations, var, let, and const 
my()
function my(){
    console.log("hello")
}

console.log(c) //output:undifined
var c=10
console.log(c) //output:10

console.log(d) // ReferenceError: Cannot access 'd' before initialization
let d=10

console.log(e)// ReferenceError: Cannot access 'd' before initialization
const e=10