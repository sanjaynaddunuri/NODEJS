const { rejects } = require("assert")
const { resolve } = require("path")

const sanju=()=>console.log('sanju')
const chinnu=()=>console.log('chinnu')
const sanjushree=()=>console.log('sanjushree')

const start=()=>
{
    console.log("Start")
    setImmediate(sanju)
    new Promise((resolve,reject)=>{
        resolve('chinuu1')
    }).then((resolve,reject)=>
    {
        console.log(resolve)
        process.nextTick(sanjushree)
    })
    process.nextTick(chinnu)
    console.log("ends")
}
start()