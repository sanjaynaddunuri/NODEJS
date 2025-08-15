const fs=require('fs')

fs.access("./file2.txt",fs.W_OK,(err,data)=>
{
    if (err) throw err;
    console.log("yes you have write access")
})

fs.access("./file2.txt",fs.R_OK,(err,data)=>
{
    if (err) throw err;
    console.log("yes you have Read access")
})

