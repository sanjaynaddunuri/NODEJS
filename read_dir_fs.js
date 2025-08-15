const fs=require('fs')
fs.readdir('./minmist',(err,files)=>
{
    if (err) throw err;
    console.log("file deleted successfully",files)}
)