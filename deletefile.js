const fs=require('fs')
fs.unlink('./file3.txt',(err,success)=>
{
    if (err) throw err;
    console.log("file deleted successfully")}
)