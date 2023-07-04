let a = [1,2,3,4,5,6,7,8,9,10]

// map method
let a2 = a.map((value)=>{
  return value+1
})
console.log(a2)

// filter method
let a3 = a.filter((value)=>{
  return value >5
})
console.log(a3)

// reduce method
let a4 = a.reduce((value1, value2)=>{
  return value1 + value2
})
console.log(a4)