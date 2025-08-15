class employee
{
    fname='sanju'
    lname='sanjushree'
    fullname()
    {
        console.log(this.fname+this.lname)
    }
}
let emp1=new employee()
emp1.fullname()

let myname=emp1.fullname.bind(emp1)

setTimeout(emp1.fullname,2000)
setTimeout(myname,4000)