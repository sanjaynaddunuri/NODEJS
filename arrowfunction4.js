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
    }
}
obj.add()
