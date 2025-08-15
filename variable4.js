let a = 10
var b = 20
const c = 30

console.log("Global Scope: ", a, b, c)

function test() {
    let a = 12
    var b = 22
    const c = 33

    console.log("Function-2 Scope: ", a, b, c)
    if (true) {
        let a = 15
        var b = 25
        const c = 35

        console.log("Block Scope: ", a, b, c)
    }
    console.log("Function-2 Scope: ", a, b, c)


}
test()