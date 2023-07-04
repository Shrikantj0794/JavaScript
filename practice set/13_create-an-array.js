// create an array of number and take input from user to dd number to this array

let arr = [1,2,3,4,5,6,7,8,9]
let add;
add = prompt("Enter a number for add in array")
add = Number.parseInt(add)
arr.push(add)
console.log(arr)

// dont stop still 0 is added
do{
  add2 = prompt("Enter a number for add in array")
  add = Number.parseInt(add2)
  arr.push(add2)
}while(add!=0)
console.log(arr)

// divisible by 2
let a2 = arr.filter((value)=>{
  return value % 2 == 0
})
console.log(a2)

// print array of square of given no
let a3 = arr.map((value)=>{
  return value*value
})
console.log(a3)