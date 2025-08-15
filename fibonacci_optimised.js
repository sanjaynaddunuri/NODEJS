let c=0
function fibonacci(n,cache={})
{
    console.log("called",++c,cache)
    if (cache[n])
    {
        return cache[n];
    }
    if (n<=1)
    {
        return 1;
    }
    return (cache[n]=fibonacci(n-1,cache)+fibonacci(n-1,cache))
}
let res =fibonacci(8)
console.log(res)