const fs=require('fs')

fs.writeFile("./file2.txt","hello this is file-2 content",()=>{
    console.log("write the operation is done")
});

