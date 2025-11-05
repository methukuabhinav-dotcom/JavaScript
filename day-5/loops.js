// loops----------------

// to avoid the repitation of code,increase the readability,maintainability of code

// use cases
// logins, captcha, reels, api, data(produts, coins), search

// Types of loops-------------------
// 1.for------used when no. of iterations are kown known previsiously
// 2.while-----------used when no. of iterations are not known previsiously.(it is a conditional based)
// 3.do-while-loop-------used atleast once if we want to execute.
// indroduced in ES6
// 4.for-in -------used for repeating through the properties
// 5.for-of----------used for repeating through inumerable.

// for loop-------
// syntax :
// let i=0; start point 0 1 2 3  i<=3   no-itteration -4
// let i=1; start point 1 2 3  i<=3   no-itteration -3
//  condition :i<=3
// increment:i++
// for(initialization;condition;increment/decrement){
// }

// natural Numbers 1,10
// start point :1==> i=1
// end point :10 ==> i<=10
// increment : i++ 
// for(let i=1;i<=10;i++){
//     console.log("i",i)
// }

// reverse order   
// sp :10 
// endpoint:i>=1 ;
// i--

// for(let i=10;i>=1;i--){
//     console.log("i",i)
// }

// let arr=[1,2,3,4,5,6,7,8,9,10]
//      //  0 1 2 3 4 5 6 7 8 9
// // // start point 0
// // endpoint :arr.length 

// for(let i=0;i<=arr.length-1;i++){
//     console.log("i",i)
//     console.log("val:",arr[i])
// }

// for(let i=arr.length-1;i>=0;i--){
//     console.log("i",i)
//     console.log("val:",arr[i])
// }


// let str="hello" 
//     // 0:h 1:e 2 :l 3:l 4:0
// for(let i=0;i<=str.length-1;i++){
//     console.log(str[i])
// } 

// str="Hello"
// for(i=str.length-1;i>=0;i++){
//     console.log(str[i])
// }

// wap to print sum of even natural numbers in given range 1-20
// let a variable sum=0
// logic
// 

// let sum=0
// function sumofeven(start,end){
//     for(i=start;i<=end;i++){
//     if(i%2==0){
//         console.log(i)
//         sum+=i
//     }
// }
// console.log(sum)
// }
// sumofeven(1,30)

// wap to print the sum of odd n0. in a given array
// let arr=[1,3,4,5,6,7,8,9,12,15,13,16]
// let sum=0
// for(i=0;i<=arr.length-1;i++){
//     // console.log(arr[i])
//     if(arr[i]%2==1){
//         console.log(arr[i])
//         sum+=arr[i]
//     }
// }
// console.log(sum)


// 2.while loop---------------------
// used when the no. of iterations are unknown
// // syntax:
// let i=0 // intializtion
// while(condition){
// //   increment /decrement
// i++
// }

// 3.do-while loop---------------
// // syntax: do-while
// initialaztion
// do{
// //  increment /decrement 
// }while(condition)

// 4.for-in loop-------------->objects
// syntax--
// for(let key in varname){
// //   print the output
// }
let uname="p"
let m="mobile_2"

// for in loop
// let data={
//    [uname]:"raju", // ["uname"]:"raju"
//     age:24,
//     [m]:39999,
//     address:"hybd"
// }
// accessing object values
// console.log(data)
// console.log(data.uname)
// console.log(data['age'])//static way of accessing
// console.log(data[uname])//data['p'] // dynamic way of accessing

// console.log(data.mobile_1)
// console.log(data[m])


// let user={
//     name:"raju",
//     age:20,
//     details:"hybd",
//     degree:true
// }
// for(let key in user){
//     console.log(user[key])
// }

// let product={
//     name:"iphone",
//     price:80000,
//     Ram:"2gb",
//     Rom:"4gb",
//     Hdcalling:"true",
//     batery:5000
// }

// // Template literals  ``
// let d="hello's" 
// let d1='hello"s'
// let d2='hello"s'
// let ad=d1+"these is u"+d2
// let ad1=`hello's "hhii" ""lhgfghjk"`
// // multi line string is also possible
// let ad2=`hello's 
// "hhii"
//  ""lhgfghjk"`
//  let ad3=`${d1} lkjhgfdfghjkl;lkjhg ${d2}`



// name : value 
// for(let key in product){
//     console.log(key + ":" + product[key])// without template literals
//     console.log(`${key}:${product[key]}`)//with template literals 
// }
// for(let val of product){ //type object are not itterable
//  console.log(val)
// }

// let product1={
//     name:"iphone",
//     price:80000,
//     Ram:"2gb",
//     Rom:"4gb",
//     Hdcalling:"true",
//     batery:5000
// }

// // to access only keys
// Object.keys(variblename)
// // to access only value
// Object.values(variblename)
// // to access keys and values
// Object.entries(variblename)
// let v1=Object.entries(product1)
// // console.log(v1)


// let arr=[1,2,3,4,5,6,7]
// let str="hello" //{h:0 e:0 l:2 0:0}
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// for(let val of arr){
//     console.log(val)
// }
// for(let val of str){
//     console.log(val)
// }

// let rep={}
// for(let val of str){
//    console.log({[val]:rep[val]+1})
// }


// 5.for-of------------arrays,strings
// for(let val of  varname){
//     //print the output
// }