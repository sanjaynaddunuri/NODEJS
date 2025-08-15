let Obj = {
  a: 10,
  b: 20,
  add: function () {
    console.log(this.a + this.b); //this=obj
  },
  mul: ()=> {
    console.log(this.a * this.b); //this= module.exports={}
  },
};
Obj.add()
Obj.mul()