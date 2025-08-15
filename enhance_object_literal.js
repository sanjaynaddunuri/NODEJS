let user = { name: "sanjay", age: 30, add: "warangal" 
    ,displayinfo()
    {
        console.log(this.name,this.add,this.age)
    }
}
user.displayinfo()

function demo(user)
{
    // return {name:user.name,add:user.add}
    return{name,add}
    
}
let res=demo(user)
    console.log(res)
