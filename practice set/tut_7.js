 // String Function

 const Fname = `Shri`;
 const Lname = `jamale`;
 console.log(Fname + ` ` + Lname);

 let name;
 let fullName = "Shrikant Ganesh Jamale";
 name = "My name is: ";
 name = name.concat(fullName);
 console.log(name);
 console.log(name.length);
 console.log(name.toLowerCase());
 console.log(name.toUpperCase());
 console.log(name[5]);
 console.log(name.indexOf(`Lname`));//it is case sensitive;
 console.log(name.lastIndexOf(`a`));
 console.log(name.charAt(5));
 console.log(name.endsWith(fullName));
 console.log(name.includes(`shri`));//case sensitive
 console.log(name.substring(3,16));
 console.log(name.slice(-4));//last 4 character returns
 console.log(name.slice(0,4));
 console.log(name.split(' '));
 console.log(name.split('a'));
 console.log(name.replace(`Shrikant`, `Shri`));
             