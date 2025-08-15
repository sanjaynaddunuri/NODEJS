let user={"first name":"sanjay",age:35,add:"warangal"}
console.log(user.length)

let allkeys=Object.keys(user);
console.log(allkeys.length)

console.log('add' in user)//true
console.log(user.hasOwnProperty('add'))//true