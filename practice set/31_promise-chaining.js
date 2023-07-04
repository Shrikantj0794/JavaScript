let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HI")
    resolve(56)
  }, 2000)
})
  p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
      resolve(57)
      setTimeout(()=>{
        console.log("My name is Shrikant")
      },2000)
    }).then((value)=>{
        console.log(value)
    })
  })