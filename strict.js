//'use strict'
//using strict mode variable declaration without let/var/const is not allowed

var a=10//global
console.log(a)

function f1()
{
    let b=20
    f=10
    console.log('inside f1 a: ',a)//yes
    console.log('inside f1 b: ',b)//yes
    //console.log('inside f1 c: ',c)//no
   
}

function f2()
{
    let c=30
    console.log('inside f2 a: ',a)//yes
    //console.log('inside f2 b: ',b)//no
    console.log('inside f2 c: ',c)//yes
    console.log('inside f2 f: ',f)
}

f1()
f2()