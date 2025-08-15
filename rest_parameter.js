function add(a,b)
{
    console.log(a+b)
}
add(2,3)
add(2,3,4)

function sum()
{
   let res=0
   for(ele of arguments)
   {
    res+=ele
   }
   console.log(res)
}
sum(2,3,4)
sum(3,3,6,3)