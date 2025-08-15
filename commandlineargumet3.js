let args=process.argv.slice(2)
console.log(args)

let argsobj={}
for (ele of args)
{
    let keyvaluearr=ele.split('=')
    let [key,val]=keyvaluearr
    argsobj[key]=val
}
console.log(argsobj)