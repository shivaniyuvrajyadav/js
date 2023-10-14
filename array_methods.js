// map prints all the values of array one by one 
// map is use when we have to create a new array
// foreach is used to perform particular operation on the array
// foreach iterates to all elements of array 

// map  creates new array

// let arr = [45,23,21]
// let a = arr.map((value,index,array)=>{
//  console.log(value,index,array)
//  return value + 1
// })
// console.log(a)

// filter method 
// filter var array with values that passes a test
// creates a new array
let arr2 = [45,23,21,0,3]
let a2= arr2.filter((a)=>{
  return a<10
})
// console.log(a2)

// reduce method 

let arr3 = [1,2,3,5,2,1]
let b= arr3.reduce((a ,a2)=>{
    return a + a2
})
console.log(b)
