const http=require('http')

function reqListner(req,res)
{
    console.log(req.url,req.method,req.headers );
    res.write("<h1>response from server....<h1>")
    res.end()
}

const server=http.createServer(reqListner)

server.listen(5000 ,()=>{console.log('server running on port 5000')})