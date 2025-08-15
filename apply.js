let res1=Math.max(10,20,30,40)
console.log(res1)//50

let arr1=[10,20,30,40,50]
let res2=Math.max.apply({},arr)
console.log(res2)//NaN

let arr2=[10,20,30,40,50]
let res3=Math.max(...arr2)
console.log(res3)