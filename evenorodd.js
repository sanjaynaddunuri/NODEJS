let commandarg=process.argv.slice(2)
let num=''
if(commandarg.length>0)
{
    num=commandarg[0]
}
else
{
    console.log("please pass the number")
}

let isEven=(number)=>
{
    if(typeof number=='number')
    {
        if (number%2==0)
        {
            return true
        }
        return false
    }
}
console.log(isEven(+num))