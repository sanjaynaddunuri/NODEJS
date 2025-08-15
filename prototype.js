class Student{
    constructor(name,roll,course)
    {
        this.roll=roll
        this.name=name
        this.course=course

    }
}
Student.prototype.clgname="SR University"
Student.prototype.clgadd="warangal"

let std1=new Student(101,'Sanju','nodejs')

let std2=new Student(102,'chinnu','nodejs')

console.log(std1,std2)

console.log(std1.clgname)
console.log(std2.clgadd)


std2.clgname='SRU'
console.log(std1.clgname,std2.clgname)

Student.prototype.clgname="SR"
console.log(std1.clgname,std2.clgname)

