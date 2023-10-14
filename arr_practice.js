// create an array of numbers and take input from
// the user to add numbers to the array 
const prompt = require("prompt-sync")()
// let arr = [1,2,3,8]
// let a = prompt("enter a number")

// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// add elements to array until the value is 0 
let arr = []
let a 
do {
 a= prompt("enter elements")
 a = Number.parseInt(a)
 arr.push(a)
 console.log(arr)
}while(a!=0);
console.log(arr)