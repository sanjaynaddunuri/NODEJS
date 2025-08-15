const fs=require('node:fs')

fs.stat('./file2.txt',(err,data)=>
{
    if (err)
    {
        console.log(err)
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size+'KB')
})