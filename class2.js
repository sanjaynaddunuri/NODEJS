//ES-6
class Student{
    constructor(roll,name,course)
    {
        this.name=name
        this.roll=roll;
        this.course=course
    }
}
let std=new Student(101,'Sanju','NodeJS')
let std1=new Student(102,'SanjuShree','NodeJS')
console.log(std,std1)