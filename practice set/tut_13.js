// Map(), Filter(), Reduce()
// map create a new array by performing some operation on each array element

arr = [1,2,3]
let a = arr.map((value)=>{
console.log(value);
  return value+1;
})
console.log(a)

// Filter()
// filter the values of an array according ther condition 

arr2 = [1,2,3,4,5,6,7,8,9,10]
let a2 = arr2.filter((a)=>{
  return a<5
})
console.log(a2)

// Reduce()
// reduce an array to a single value 

arr3= [1,2,3,4,5,6,7,8,9,10]
let a3 = arr3.reduce((element_1,element_2)=>{
  return element_1+element_2 
})
console.log(a3)