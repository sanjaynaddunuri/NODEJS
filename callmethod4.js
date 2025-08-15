//call() is used for inheritence also
function person(name,age)
{
    this.name=name
    this.age=age
}
function employee(name,age,eid,sal)
{
    person.call(this,name,age)
    this.eid=eid
    this.sal=sal

}
let emp1=new employee('sanjay',22,101,20000)
console.log(emp1)