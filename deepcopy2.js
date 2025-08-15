let emp = {
    name: "sanjay",
    sal: 4000,
    // displayinfo: function () {
    //     console.log(this.name, this.sal)
    // }
}
// let emp2 = structuredClone(emp1)
let emp2=JSON.parse(JSON.stringify(emp))

console.log(emp)
console.log(emp2)