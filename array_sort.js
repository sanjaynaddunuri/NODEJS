let students=['sanjay','chinnu','sanjushree','srija']
students.sort()
console.log(students)

let arr1=[10.50,43,8,12]
arr1.sort()
console.log(arr1)

let arr2=[10,92,8,7,9,101,105,92]
arr2.sort()//Sort will work for only strings , not for numeric sort
console.log(arr2)

arr2.sort((a,b)=>a-b)
console.log(arr2)