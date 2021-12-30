// Assignment - 1--Q-2
// Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.

var a = prompt("enter the first no.");
var b = prompt("enter the second no.");
var c = prompt("enter the third no.");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if(a>=b && a>=c){
console.log("greatest number is " ,a)}
else if(b>=a && b>=c){
console.log("greatest number is ", b)}
else{
console.log("greatest number is ", c)}