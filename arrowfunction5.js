let obj = {
    a: 10,
    b: 20,
    add: function () {
        console.log(this.a + this.b)
        var that=this

        function sub() {
            console.log(that.a - that.b)//this not pointing to obj and its pointing to global object
        }
        sub()
        let mul=()=>
        {
            console.log(this.a*this.b)

        }
        mul()//arrow function doesn't care how its called 
        //where it is declared , inside add(),inside add() this=obj,
    }
}
obj.add()
