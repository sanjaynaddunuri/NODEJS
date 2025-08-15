var arr1=[10,20,30,10,20,30,40,20,50]
let obj={}
for(let ele of arr1)
{
    if (obj[ele]){
        obj[ele]=obj[ele]+1
    }
    else
    {
        obj[ele]=1
    }
}
console.log(obj)