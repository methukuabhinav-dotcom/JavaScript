// Javascript assignment-2

//  Level:1:

//  1. Declare firstName, lastName, country, city, age, isMarried, and year variable and assign value to it and use the type of operator to check different data types.
let firstName="Abhinav"
let lastName="Reddy"
let country="India"
let city="Hyderabad"
let age=22
let isMarried=false
let year=2003
console.log(typeof(firstName)) //string
console.log(typeof(lastName)) //string
console.log(typeof(country))//string
console.log(typeof(city))//string
console.log(typeof(age))//number
console.log(typeof(isMarried))//boolean
console.log(typeof(year))//number

// 2. Check if the type of '10' is equal to 10
let a="10"
let b=10
console.log(typeof(a))//string
console.log(typeof(b))//number
// both are not same

//  3. Check if parseInt('9.8') is equal to 10
let c=9.8
let d=parseInt(c)
console.log((d)) //9
// no it is not equal to 10

//  4. The boolean value is either true or false.
//      ●i. Write three JavaScript statements that provide truthy value.
let myString = "Hello"; // A non-empty string is truthy
let myNumber = 10;     // A non-zero number is truthy
let myObject = {};  // An empty object is truthy
//       ii. Write three JavaScript statements that provide falsy value.
let emptyString = "";     // An empty string is falsy
let zeroNumber = 0;       // The number 0 is falsy
let notDefined = undefined; // The undefined value is falsy

//  5. Given the following declarations, what are the new values of each variable after the given statement?
var x=10;
var y=15;
var z=6;
console.log(x += 2*y) //40
console.log(y-= x /--z) //7
console.log(z += x-- + 5) //50
console.log(y /= z + 2) //0.1346153846153846
console.log(x *= ++y- z--) //-1905.75

//  6. Figure out the result of the following comparison
console.log(4>3)//true
console.log(4>=3)//true
console.log(4<3)//false
console.log(4<=3)//false
console.log(4==4)//true
console.log(4===4)//true
console.log(4!=4)//false
console.log(4!==4)//false
console.log( 4=='4')//true
console.log(4 ==='4')//flase

//  7. Figure out the result of the following expressions
console.log(4>3&&10<12)//true
console.log(4>3&&10>12)//false
console.log(4>3||10<12)//true
console.log(4>3||10>12)//true
console.log(!(4 >3))//false
console.log(!(4 <3))//true
console.log(!(false))//true
console.log(!(4 >3&&10<12))//false
console.log(!(4 >3&&10>12))//true
console.log(!(4 ==='4'))//true

//  Level-2:------------

// Write a script that prompts the user to enter the base and height of the triangle and calculate the area of a triangle (area = 0.5 x b x h).
// let base=prompt("Enter the base:")
// let height=prompt("Enter the height:")
// let area=0.5*parseFloat(base)*parseFloat(height)
// console.log(area)
// alert(area)

//  2. Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of the triangle (perimeter =a+b+c)
// let f=prompt("Enter the side a:")
// let g=prompt("Enter the side b:")
// let h=prompt("Enter the side c:")
// let perimeter=parseFloat(f)+parseFloat(g)+parseFloat(h)
// console.log(perimeter)
// alert(perimeter)

//  3. Get length and width using the prompt and calculate the area of a rectangle (area = length x width and the perimeter of the rectangle (perimeter = 2 x (length + width))
// let length=prompt("enter the length:")
// let width=prompt("enter the width:")
// let perimeter=2*(length+width)
// let area= length*width*perimeter
// alert(area)

//  4. Get the radius using the prompt and calculate the area of a circle(area = pi x r x r) and the circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius=parseFloat(prompt("enter the redius:"))
// let pi=3.41
// let area=pi*radius*radius
// let circumference=2*pi*radius
// console.log(area)
// console.log(circumference)

// 5. Calculate the slope, x-intercept, and y-intercept of y = 2x-2
// given eq is y = 2x-2 comapre with y=mx+f
// so m=2 and f=-2

// const n=2
// const f=-2
// // to cal the x-intersept y=0
// console.log("Equation: y = 2x - 2");
// console.log("Slope (m):", n);
// console.log("Y-intercept (f):", f);
// console.log("X-intercept:", -f/n);

