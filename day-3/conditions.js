// diffirent types of conditional statments

// i. simple if
// ii.nested if
// iii.else-if : ternary operator
// iv.else-if-lader
// v.switch-cases

// i.simple if
// syntax 
// if(condition){
//     if condition is true these block of code executes
// }

// let isloggedin=true
// if(isloggedin){
//     console.log("welcome")
// }

// iii.else-if:
// syntax
// if(condition){
// this will execute will execute
// }
// else{
//     this will executecute
// }

// write a program to print the following conditions
// i. if age is > 18 and is an indian cityizen print elgible for vote
// ii.if age> 18 print eligible for driving licence

// let age=18
// let isIndian=true
// if(age>=18 && isIndian){
//     console.log("elgible for vote")
// }
// else{
//     console.log("Not")
// }

// let age=18
// let isIndian=true
// if(age>=18){
//     console.log("elgible for licence")
// }else{
//     console.log("not eligible")
// }

// Function:-----------------------
// function agecal(){  //format 
//     console.log("hello")
// }
// // function call
// agecal()//actual argument

// WAP to disine a calculater with else if lader-------------
// function calculater(op,v1,v2){
//     let cal=0
//     if(op=="+"){
//         cal=v1+v2
//     }else if(op=="-"){
//         cal=v1-v2
//     }else if(op=="*"){
//         cal=v1*v2
//     }else if(op=="/"){
//         cal=v1/v2
//     }else if(op=="%"){
//         cal=v1%v2
//     }else{
//         cal="invalid"
//     }
//     console.log(cal)
// }
// calculater("+",2,3)
// calculater("/",10,5)

// WAP to check given is +ve or-ve
// function checkNumber(num){
// if(num>0){
//     alert("+ve")
// }
// else{
//     alert("-ve")
// }
// let numb=parseInt(prompt("enter a number:"))
// checkNumber(numb)

// wap function to check given number is +ve _ve 0
// function numb(num){
//     if(num>0){
//         console.log("+ve")
//     }else if(num==0){
//         console.log("is 0")
//     }else{
//         console.log("-ve")
//     }
// }
// numb(8)

// wap to stimulate the atm withdraw
// let balance=50000
// let withdraw=parseInt(prompt("enter amount"))
// let charge=1
// let totalamount=withdraw+charge
// if(totalamount<=balance){
//     console.log("trasaction successful")
//     console.log("withdarw amount:",withdraw)
//     console.log("charges:",charge)
//     console.log("total:",totalamount-balance)
// }else{
//     console.log("insuficent funds")
// }

// WAP to check wether the person is eligible for loan
// salary>30k+ credit score>700
// function loan(salary,credit_score){
//     if(salary>=30000&&credit_score>=700){
//         console.log("is eligible")
//     }else{
//         console.log("not elgible")
//     }
// }
// loan(50000,800)

// WAP to stimulate the E-commerce checkout flow
function ecommerce(user,camount,ptype){
    if(user=="prime"){
        delivaryCharges=0
        console.log("free delivery")

    }else if(user=="new"){

    }else{

    }
}

// WAP to stimulate cupone based discount for buying electronics
// WAP to stimulate insurance calculations based on user age and amount
// WAP to stimulate car price based on number of hours booked and traveled distance