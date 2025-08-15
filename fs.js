let fs=require('fs')

//read content from file

fs.readFile('./file.txt',(err,data)=>
{
    console.log(data)
    console.log(data.toString())
})

