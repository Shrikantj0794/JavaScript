let user = prompt("Enter stone, paper or scissors")
let ComputerI = Math.floor(Math.random()*3);
let Computer = ["stone", "paper", "scissors"][ComputerI]

const match = (Computer, user)=>{
  if(Computer === user){
    return "Nobody. Match is tied";
  }
  else if (Computer=== "stone" && user === "paper"){
    return "user"
  }
  else if (Computer=== "stone" && user === "scissors"){
    return "Computer"
  }
  else if (Computer=== "paper" && user === "stone"){
    return "Computer"
  }
  else if (Computer=== "paper" && user === "scissors"){
    return "user"
  }
  else if (Computer=== "scissors" && user === "stone"){
    return "user"
  }
  else if (Computer=== "scissors" && user === "paper"){
    return "Computer"
  }
}
  let result = match(Computer,user)
  document.write(`<b>Computer: </b>${Computer} <br> <b>User: </b>${user} <br>The winner is: <u> ${result.toUpperCase()}</u>`)
