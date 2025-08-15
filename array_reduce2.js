let arr=[10,20,30,40,50,10,50,20,10]

let res=arr.reduce((res,ele)=>
{
    if (res[ele])
    {
        res[ele]+1
    }
    else{
        res[ele]=1
    }
    return res

},{})
console.log(res)