alert ("check your eligibility")
let a = prompt("Enter your age", 18)
a = Number.parseInt(a)
document.write(" User age: ", a)
confirm("you Enter correct age")
if(a > 18){
  document.write(" you can drive car")
}
else{
  document.write(" you can't drive car")
}

// below code for cangeing body color

// alert("Choose background color")
// let a = prompt("Enter a number")
// if(a < 5){
//   document.body.style.background= "yellow"
// }
// else{
//   document.body.style.background= "red"
// }