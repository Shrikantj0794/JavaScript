let marks = [10, 20, 30, 40, 50]

// normal way to acces array
for (i = 0; i <= marks.length; i++) {
  console.log(marks[i])
}
// for each
marks.forEach((element) => {
  console.log(element * element)
})

// array from to convert string in to array 
let name = "shrikant"
let arr = Array.from(name)
console.log(arr)

//standerd way to access array element
// for...of
for (let i of marks) {
  console.log(i)
}

//for...in
for (let i in marks) {
  console.log(i)
}

for (let i in marks) {
  console.log(marks[i])
}