let str1='2+2'
let str2=new String('2+3')
console.log(eval(str1))//eval() method works with string literal
console.log(eval(str2))//eval() method not works with string Object

let str3=str2.valueOf();//valueof method converts string object to string literal
console.log(eval(str3))