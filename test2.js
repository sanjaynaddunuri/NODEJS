function varTest()
{
    if(true)
    {
        var a=10//this variable is not block scope , it is function scope 
        console.log("Block",a)
    }
    console.log("Function",a)
}
varTest()