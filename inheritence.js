class person
{
    name;
    add
    constructor(name,add)
    {
        this.name=name;
        this.add=add
    }
}

class Employee extends person{
    constructor(name, add,eid,sal)
    {

        super(name,add)
        this.eid=eid
        this.sal=sal
    }
}
class Student extends person{
    constructor(name, add,roll,course)
    {

        super(name,add)//invoke parent class constructor
        this.roll=roll
        this.course=course
    }
}

let std1=new Student("Sanjay","warangal",101,"NodeJs")
let emp1=new Employee("sanjushree",1107,"hyderabad",35000)

console.log(std1)
console.log(emp1)