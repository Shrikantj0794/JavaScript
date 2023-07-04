console.log("Variables in JS")
// Variables in JS
// var , let , const
// var has global scope
// let has block scope
var Fname = `Shrikant`;
var Lname =`Jamale`;
console.log(Fname);
console.log(Fname, Lname);

console.log(1+8);
var marks = 12;
var Name = `shri`;
console.log(Fname,Lname,marks,Name);
// variables are case Sensitive
const myname = `Shri`;
console.log(myname);
let ex = `maddy`;
console.log(ex)
var city = `rampur`
// let has block scope

{
    let city = `solapur`;
    console.log(city)
 //    coz let has local scope
 }
console.log(city);
 // coz var has global scope 
 
 const arr = [1,2,3,4,5];
 arr.push(6);
 arr.pop();
 console.log(arr)
