const path=require('path')

console.log(`seperator ${path.sep}`)
console.log(`Delimeter ${path.delimiter}`)

const dirname=path.dirname("C:/Users/naddu/Desktop/nodeJS>")
console.log(dirname)

const filenamewithextension=path.basename("C:/Users/naddu/Desktop/nodeJS/path.js")
console.log(filenamewithextension)

const filenamewithextension1=path.basename("C:/Users/naddu/Desktop/nodeJS/path.js",'.js')
console.log(filenamewithextension1)

const extname=path.extname("C:/Users/naddu/Desktop/nodeJS/path.js",'.js')
console.log(extname)