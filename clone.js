let arr1=[10,20]
let arr2=arr1;//reference copy
arr2.push(30)
console.log(arr1,arr2)

let arr3=[10,20]
let arr4=[...arr3]//spread operator , value copy
arr4.push(30)
console.log(arr3,arr4)