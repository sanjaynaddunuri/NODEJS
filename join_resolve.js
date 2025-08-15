const path=require('path')

console.log(path.join())
console.log(path.resolve())


let a=path.join('hello','/path','me')
console.log(a)

let b=path.resolve('hello','/path','me')
console.log(b)

