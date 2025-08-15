
let name="SanjuShree"
function f1()
{
    let a=20
    let b =30
    function f2()
    {
        let c=40;
        console.log(a,b,c,name)
    }
    f2()
    console.dir(f2)
}
f1()
console.dir(f1)