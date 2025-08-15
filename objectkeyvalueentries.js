let emp={name:"sanjay",salary:5000,add:'warangal'}

let allkeys=Object.keys(emp)
let allvalues=Object.values(emp)
let allentries=Object.entries(emp)

console.log(allkeys)
console.log(allvalues)
console.log(allentries)

let empObj=Object.fromEntries(allentries);
console.log(empObj)