const fs=require('fs')

fs.readFile("bac.txt",(err,data)=>
{
    if(err)
    {
        throw err
    }
    console.log("reading a file")
})