let arr1=[10,20,30,40,50]
let arr2=[]
for(ele of arr1)
{
    ele=ele+5
    arr2.push(ele)
}
console.log(arr2)

let arr3=arr1.map(ele=>ele+5);//map method will manipulate each and every element in an array
console.log(arr3)