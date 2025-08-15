let obj = {
    a: 10,
    b: 20,
    add: function () {
        console.log(this.a + this.b)
    },
    mul: () => {
        console.log(this.a * this.b)
    }
}
obj.add()//here this points to object this=obj
obj.mul()//here this points to empty object this={}