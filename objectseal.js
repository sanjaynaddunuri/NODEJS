let obj1 ={a:10,b:20}
obj1.a=15//update the value of a 
obj1.c=30//add a new property
delete obj1.b//delete property
let emp={name:"sanjay",salary:5000}

console.log(obj1)
Object.seal(emp)
emp.name='sanjushree'//value change-YEs
emp.add='banglore'//add a new property-No
delete emp.salary;//delete a property-No
console.log(emp)

console.log(Object.isSealed(obj1))
console.log(Object.isSealed(emp))
