let obj1={a:10,b:20}
let obj2=obj1;//address copy/reference
obj1.a=15
obj2.b=25
console.log(obj1,obj2)

let obj3={a:10,b:20}
let obj4=Object.assign({},obj3)//value copy - shallow copy
obj3.a=15
obj4.b=25
console.log(obj3,obj4)