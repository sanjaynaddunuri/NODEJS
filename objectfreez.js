let obj1 ={a:10,b:20}
obj1.a=15//update the value of a 
obj1.c=30//add a new property
delete obj1.b//delete property
let emp={name:"sanjay",salary:5000}

console.log(obj1)
Object.freeze(emp)
emp.name='sanjushree'//value change-NO

emp.add='banglore'//add a new property-No
delete emp.salary;//delete a property-NO
console.log(emp)

console.log(Object.isFrozen(obj1))
console.log(Object.isFrozen(emp))
