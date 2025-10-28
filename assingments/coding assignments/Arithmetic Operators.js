//  Mastery : Arithmetic Operators 

// 1.Divide two numbers and print the quotient. 
let a=10; 
let b=3; 
let quotient= a/b; 
console.log(quotient); // output:3.33333333335 

// 2. Use unary plus (+) to convert a string "123" into a number. 
const str = "1234"; 
const num = +str; // Unary plus converts string to number 
console.log(typeof num, num); // output: "number", 1234

// 3. Find the square of a number using the exponentiation operator (**). 
let n=2; 
let square=n**2; 
console.log(square);// output: 4

// 4. Write a program to extract the last digit of a number using % operator. 
let c=894; 
let lastDigit= c%10; 
console.log(lastDigit); // output: 4 

// 5. Write a program to remove the last digit of a number using / operator. 
let d=1234; 
let withoutlast= Math.floor(d/10); 
console.log(withoutlast); // output:123
 
// 6. Write a program to get the last two digits of a number using % operator. 
 let e =1234; 
let lasttwo=e%100; 
console.log(lasttwo);// output:12

// 7. Write a program to remove the last two digits of a number using / operator.  
let f  = 9876; 
let withoutlasttwo = Math.floor(f/100); 
console.log(withoutlasttwo);// output: 98

// 8. Write a program to swap the last and first digit of a two-digit number using only arithmetic operators. 
let g = 98; //  
const first = Math.floor(g / 10); 
const last = g % 10; 
const swapped = last * 10 + first; 
console.log(swapped); // output:98

// 9. Write a program to reverse a two-digit number without using strings. 
let h = 83; 
const reversed = Math.floor(h%10)*10 + Math.floor(h/10); 
console.log(reversed); // output:38 

// 10. Write a program to find the sum of digits of a two-digit number using % and /. 
let i= 54; 
let add= Math.floor(i%10) + Math.floor(i/10); 
console.log(add); // output: 9

// 11. Write a program to multiply the digits of a two-digit number. 
let j=55; 
let product=Math.floor( j%10) *Math.floor(j/10); 
console.log(product); // output:25

// 13. Write a program to round a floating-point sum to 2 decimal places using arithmetic only. 
const sum = 0.1 + 0.2; 
const rounded = Math.round(sum * 100) / 100; 
console.log(rounded); // output:0.3 

// 14. If x = 5, what will be the final value of y after executing: let y = x++ + ++x + --x + x--;and what will x be at the end? Explain step-by-step evaluation. 
let x = 5; 
let y = x++ + ++x + --x + x--; 
console.log('y =', y); // output: 24 
console.log('x =', x); // output: 5

// 15. If p = 3 and q = 4 find the final values of p and q after this code executes: q = p++ + ++q - --p + q--; p = --q + p++ - ++p + q++;
let p = 3, q = 4; 
q = p++ + ++q - --p + q--; 
p = --q + p++ - ++p + q++; 
console.log('p =', p); // output:16 
console.log('q =', q); //output: 10