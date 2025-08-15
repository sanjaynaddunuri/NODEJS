const fs=require('fs')

fs.readFile("./file2.txt",'utf-8',(err,data)=>
{
    console.log(data)
})

//'utf-8' will convert ths buffer to string format (conversion of buffer to string)