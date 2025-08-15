const {spawn}=require('child_process')

for (let i=1;i<=3;i++)
{
    const filenane=`text_${i}.js`
    const childprocess=spawn('node',[filenane])

    childprocess.stdout.on('data',(data)=>
    {
        console.log('output',data.toString())
    })

    childprocess.stderr.on('data',(data)=>
    {
        console.log('Error',data)
    })
    childprocess.on('close',(data)=>
    {
        console.log('Child process exited',data)
    })
}
