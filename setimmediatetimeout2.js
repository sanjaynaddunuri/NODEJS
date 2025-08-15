const fs=require('fs')

fs.readFile("file.txt",()=>
{
setTimeout(() => {
    console.log('timeout')
},0);

setImmediate(()=>
{
    console.log('immediate')
})
})