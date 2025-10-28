// JS: is used for creating dynamic web pages.

// doc.write: is used for presenting something in web page.
// console.log: is used for user purpose.
// alert: is useed for giving alerts to the user

// variables are containers used for storing the datatypes(values or info)

// identifier rules
// identifier should not start with num or spalcial chars
// var 5fullname-----numerical error(syntax error)
// var ^fullname-----syntax error
// var $fullname, var _fullname------it is allowed 

// it should not contain the reserved keywords
// var var---'var ' is not allowed
// for
// while

// it should not contain spaces
// var full name-----syntax error


// Declaration

// var a;
// console.log(a)
// var b=10;
// console.log(a)

// Difference
// var a;
// let b;
// 'const' declarations must be initialized.
// const c; //Uncaught SyntaxError: Missing initializer in const declaration
// const c=10; //Uncaught SyntaxError: Missing initializer in const declaration


// Redeclaration 

// scope :  lifetime of varaible (accessiability of variable with code or file)
    //    1.global sccope :   can be accessed everywhere within the code  (inside the block inside the fuction or class or outside block or fucntion of class)
    //  2.Local scope :
            //    block scope  :  { let a} 
            //    function scope function sample(){}
            //    module sccope 

// global scope
// var a=10
// let b=30
// const c=40

// console.log("g-a:",a)
// console.log("g-b:",b)
// console.log("g-c:",c)


// block scope
{
// console.log("g-a:",a)
// console.log("g-b:",b)
// console.log("g-c:",c) 
// console.log("⭐⭐block scope⭐⭐")
// var a=10
// let b=30
// const c=40
// console.log("b-a:",a)
// console.log("b-b:",b)
// console.log("b-c:",c) 

}
// console.log("⭐⭐-outside of block scope⭐⭐")
// console.log("b-a:",a)
// console.log("b-b:",b) //Uncaught ReferenceError: b is not defined
// console.log("b-c:",c) //Uncaught ReferenceError: c is not defined


// function scope
// function sample(){
    // console.log("g-a:",a)
// console.log("g-b:",b)
// console.log("g-c:",c)
//     console.log("⭐⭐fn scope⭐⭐")
// var a=10
// let b=30
// const c=40
//     console.log("f-a:",a)
//     console.log("f-b:",b)
//     console.log("f-c:",c)
// }
//  console.log("⭐⭐outside scope⭐⭐")
    // console.log("f-a:",a) //Uncaught ReferenceError: a is not defined
    // console.log("f-a:",b) //Uncaught ReferenceError: b is not defined

// calling the function
// sample()


// REDCLARATION : creating the varaible with same name in same scope

// var a ;
// var a ;
// let b; //ncaught SyntaxError: Identifier 'b' has already been declared
// // let b;//Cannot redeclare block-scoped variable 'b'
// const c=10
// const c=10 //Cannot redeclare block-scoped variable 'c'.

{
// const c=10
}

// Reassignment

// var a=10
// console.log(a)   //10
// a=20
// console.log(a)   //20

// let ab=10
// ab=20

// const c=1
// c=2

// declaration: creation of a variable : var a; let b;
// scope: lifetime of variable or function etc...(accessility of variable)
// initialization: assigning a value to a variable at a time of creation.
// global scope: life time of variable (var let const)
// block scope: let const
// function scope: var
// hoiisting : all declaration are moved to there scope

// debugger;// stop excution of code 
// var a=10
// let b=40
// const c=30

// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a)
// console.log(b)


// {
//     debugger
// var a=10
// let b=10
// const  c=10
// }

// all the variables are hoisted to top of there scope but let and const are not initialized with value like var
// variables like let and const cannot be accessed before its declaration because the variables like let and constant will be stored in TDZ untill it reaches its declaration.
// debugger
// console.log(a*10)
// var  a=0
// let a=10
// let a=20
// console.log(a)

// console.log(b)
// let b=undefined


// var a;
// var a;
// let b;
// let b;
// const c=10;
// const c=10;

// var a; // undefined
// console.log(c) //refrence error
// let c;
// console.log(c)// undefined
// const d=10


// function data(){ //block scope
//     debugger
//     var a="mobile" //function scoped
//     let b="lp" // block scope
//     const c="AC" //block scope
// }

//  data()


// console.log(a)// undefined
// var a=10
// console.log(a)// 10

// console.log(b) //refrence error 
// let b=10
// b="hii"
// const c=10



// converstions
// console.log(Math.floor(10.5))  //10
// console.log(Math.floor(10.8))  //10
// console.log(Math.ceil(10.5))  //11
// console.log(Math.ceil(10.2))  //11
// console.log(Math.round(10.5))  //10
// console.log(Math.round(10.2))  //10
// console.log(Math.abs(-10))  //10
// console.log(Math.sqrt(16))  //4
// console.log(Math.random())  //we get random numbers here
// console.log(Math.random()*10)  //we get random numbers here that doesnot start with 0
// console.log(Math.floor(Math.random()*10)) //we get integer


//Operators:
// 1.ARTHAMATIC operators:
    //   i.+----------ADDition operator
            //  ---------string operator
            // ----------uniary plus operator
        // -, *
        // /-------divison operator---------it gives quotient
        // %-------modular division operator--------it gives remainder
        // **--------exponential operator  ----  ES6