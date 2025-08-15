let user=
{
name :"sanjay",
sayHi:function()
{
    console.log("Hii"+this.name)//this=user
}

}
user.sayHi()

setTimeout(user.sayHi,2000)

setTimeout(()=>
{
    user.sayHi.call(user)
},4000)
//call() method is used for inheritence also
