function add(x,y,z)
{
    console.log(x+y+z)
}
add(2,3)//Not A Number (NaN)

function add1(a,b,c)
{
    a=a|0;
    b=b|0;
    c=c|0;
    console.log(a+b+c)
}
add1(2,3)


function add1(a,b,c=0)
{
    console.log(a+b+c)
}
add1(2,3)//Not A Number (NaN)