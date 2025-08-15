//rest paramter
function add(...arr)
{
    let sum=0
    for (ele of arr)
    {
        sum+=ele
    }
    console.log(sum)
}
add(2,3)
add(2,3,4)
add(2,3,4,5)


