//ES-5 class

function Student(roll,name,course)//constructor /class
{
    this.roll=roll;
    this.name=name;
    this.course=course;

}
let std=new Student(101,'Sanju','NodeJS')
let std1=new Student(102,'SanjuShree','NodeJS')
console.log(std,std1)
