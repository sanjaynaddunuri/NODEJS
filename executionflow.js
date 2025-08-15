console.log("program starts")
function f1()
{
    console.log('iam f1')
}
function f2()
{
    console.log('iam f2')
}
function f3()
{
    console.log('iam f3')
}
function f4()
{
    console.log('iam f4')
}
f1()
setTimeout(f2,0)
Promise.resolve().then(f3)
f4()
console.log("program ends")
