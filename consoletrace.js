function f1()
{
    console.log('iam f1')
    f2()
}

function f2()
{
    console.log('iam f2')
    f3()
}
function f3()
{
    console.log('iam f3')
    console.trace()
}

f1()