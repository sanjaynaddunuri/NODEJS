const path=require('path')


const isabsolute=path.isAbsolute("C:/Users/naddu/Desktop/nodeJS")
console.log(isabsolute)


const isabsolute1=path.isAbsolute("home/")
console.log(isabsolute1)

let pathstr=path.format({dir:"c:/node/nodejs/html/js",base:'app.js'})
console.log(pathstr)

let pathstr2=path.join('/home','abc','pqrq')
console.log(pathstr2)