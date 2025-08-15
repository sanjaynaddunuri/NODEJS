class emp{
    name ='SanjuShree'
    greet1=function()
    {
        console.log("hello " + this.name)
    }
    greet2=()=>
    {
        console.log("Hi "+ this.name)
    }
}
let e=new emp()
e.greet1()//greet1(), this=emp
e.greet2()//greet2(), this=emp

setTimeout(e.greet1,3000)
setTimeout(e.greet2,6000)