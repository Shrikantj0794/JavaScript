const City = `beed`

var city = `rampur`
// let has block scope

{
    let city = `solapur`;
    console.log(city)
 //    coz let has local scope
 }
console.log(city);
 // coz var has global scope 
console.log(City)

// let City = Dharur

/*error cos never change 
value of City while used const
  */