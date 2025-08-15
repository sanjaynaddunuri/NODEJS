var a = 10
function demo() {
    console.log("iam demo1")//impure because 
    a = 12//its modifying the value
}
demo()

function add(a, b) {
    console.log(a + b)//impure because its not returning the value
}

function syb(a,b)
{
    console.log(a-b)//impure because ,return value is not using impure
    return 'subtraction done'
}

function mul(a,b)
{
    return a*b//pure
}