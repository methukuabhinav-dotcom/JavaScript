// ternary operators-----------------

//  15. If ais greater than b return a is greater than b' else 'a is less than b'.?using ternary operator.
let a=10
let b=2
const message=(a>b)? " a is greater than b" : "a is less than b"
console.log(message)

//  16. check given number is even or odd. using the ternary operator.
let c=23
let d=c%2
const msg=(d==0)? "is even":"is odd"
console.log(msg)

//  17. check given number is positive or negative. using the ternary operator.
let e=33
const msg1=(a>0)? "is a positive":"is a negitive"
console.log(msg1)

//  18. check given number is divisible by 5 or not. using the ternary operator.
let f=56 
let g=f%5
const msg2=(g==0)? "is divisible by 5":"is not"
console.log(msg2)

//  19. check given number is divisible by 2,3 and 4 or not. using the ternary operator.
let h=56 
let i=h%2
let j=h%3
let k=h%4
const msg3=(i==j&&j==k&&k==i)? "is divisible by 2,3,4":"is not by 2,3,4"
console.log(msg3)

// Assignment 5 – JavaScript Operators -----------

// MEDIUM LEVEL 

// 11. Write a program that takes a user’s age as input and uses a ternary operator to display "Adult" if the age is 18 or older, otherwise display "Minor". 
// let age=parseInt(prompt("enter the age:"))
// const msg4=(age>=18)?"Major":"Minor"
// console.log(msg4)

// 12. Write a program that asks the user to enter the current temperature and uses a ternary operator to display "Hot" if the temperature is above 30°C and "Cold" otherwise. 
// let temp=parseInt(prompt("enter the temp:"))
// let msg5=(temp>=30)? "Hot":"cold"
// console.log(msg5)

// 13. Write a program that takes a student’s score (out of 100) as input and uses a ternary operator to display "Pass" if the score is 50 or above and "Fail" otherwise. 
// let marks=parseFloat(prompt("enter marks"))
// console.log((marks>=50)?"pass":"fail")

// 14. Write a program that asks the user to enter a purchase amount and uses a ternary operator to calculate a discount: 
// ○ If the amount is greater than $100, apply a 10% discount. 
// ○ Otherwise, apply a 5% discount. 
// ○ Display the final amount. 
// let amount=parseFloat(prompt("enter the amount:"))
// let discount=(amount>=100)? amount*0.10:amount*0.5
// let totalamount=amount-discount
// console.log("Price:",amount)
// console.log("discount:",discount)
// console.log("total amount:",totalamount)

// 15. Write a program that asks the user to enter their age and uses a nested ternary operator to categorize their age as: 
// ○ "Child" if age is less than 13. 
// ○ "Teen" if age is between 13 and 19. 
// ○ "Adult" if age is between 20 and 59. 
// ○ "Senior" if age is 60 or above. 
// let age=parseInt(prompt("enter age"))
// let category=(age<13)? "Child": (age<=19)? "teen":(age<=59)? "Adult":"Senior"
// console.log(category)

// 16. Write a program to find the maximum of two numbers using a ternary operator. 
let num1=50
let num2=55
let maxvalue=(num1>num2)? num1:num2
console.log(maxvalue)

// 17. Write a program that takes a number as input and uses a nested ternary operator to display: 
// ○ "Positive Even" 
// ○ "Positive Odd" 
// ○ "Negative Even" 
// ○ "Negative Odd" 
// let num3=parseInt(prompt("enter a number"))
// let check=num3%2
// let display=(num3>0&&num3==0)?"+ve even": (num3>0&&num3!=0)?"+ve odd":(num3<0&&num3==0)?"-ve even": "-ve odd"
// console.log(display)

// 18. Write a program to find the maximum of three numbers using nested ternary operators. 
// let num3=10
// let num4=20
// let num5=18
// let greater=(num3>num4)? (num3>num5)?"10 is greater":"18 is greater":(num4>num5)? "20 is greater":"18 is greater"
// console.log(greater)

// 19. Write a program that takes a year as input and uses a ternary operator to determine whether it is a leap year. 
let year=2024
let leap=(year%4==0 && year%100!=0 || year%400==0)?"is a leap year":"is not a leap year"
console.log(leap)

// 20. Write a program that prompts the user for the weight of a package and their location ("domestic" or "international") and uses nested ternary operators to calculate the shipping fee: 
// ○ Domestic: < 1kg → $5, 1–5kg → $10, > 5kg → $20 
// ○ International: < 1kg → $10, 1–5kg → $25, > 5kg → $50 
// let weight=parseInt(prompt("enter weight"))
// let loc=prompt("enter loc")
// let price=(loc=="domestic")? (weight<1)?5:(weight<=5)? 10:20: (loc=="international")? (weight<1)?10:(weight<=5)? 15:25:"choose proper loc"
// console.log(price)

// 21. Write a program that takes two numbers and an operator (+, -, *, /) as input and uses a nested ternary operator to perform the correct calculation. 
let num3=20
let num4=30
let op="*"
let cal=(op=="+")?num3+num4:(op=="-")?num3-num4:(op=="*")?num3*num4:(op=="/")?num3/num4:"invalid operator"
console.log(cal)

// 22. Write a program that takes a username and password as input and uses a ternary operator to display "Login Successful" if both match predefined values, otherwise display "Invalid Credentials". 
// let username=prompt("enter user name")
// let password=prompt("enter password")
// let login=(username=="flashabhi"&&password=="Abhinav@123")?"Login Successful":"Invalid Credentials"
// console.log(login)

// 23. Write a program that takes a day number (1–7) as input and uses a nested ternary operator to display: 
// ○ "Weekday" for 1–5. 
// ○ "Weekend" for 6–7. 
// ○ "Invalid" otherwise. 
let day=7
let week=(day>=1&&day<=5)?"weekday":(day==6||day==7)?"weekend":"Inavalid"
console.log(week)

