const fs=require('fs')
fs.rename('./file.txt','./file4.txt',(err,success)=>
{
    if (err) throw err;
    console.log("file renamed successfully")}
)