console.log(this)//module.exports={}

function f1()
{
    console.log(this)//this =global
}
f1()

let f2=()=> console.log(this)
f2()

