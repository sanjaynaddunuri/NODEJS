const fs=require('fs')


fs.watch('./file2.js',(event,filename)=>
{
    console.log(`${filename} file changed`)
})
