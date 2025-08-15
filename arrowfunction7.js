class emp{
    name='sanjay'
    sal=5000
    displayinfo1()
    {
        console.log('displayinfo1-1')
        console.log(this.name,this.sal)
    }
    displayinfo2=()=>
    {
        console.log('displayinfo2-2')
        console.log(this.name,this.sal)
    }
}
let e=new emp()
e.displayinfo1()
e.displayinfo2()

let a=e.displayinfo1;
// a();

let b=emp.displayinfo2;
b()
