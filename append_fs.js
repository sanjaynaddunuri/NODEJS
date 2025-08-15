const fs=require('fs')

fs.appendFile("./file2.txt","hello this is file-2 content",()=>{
    console.log("appendfile operation is done")
});
