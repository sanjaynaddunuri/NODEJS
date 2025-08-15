const http = require("http");

const server = http.createServer((req, res) => {
  const url=req.url
  console.log(url)
  if (url==='/')
  {
    res.write("<h1> you are in Home Route")

  }
  else if(url==="/users")
  {
    res.write("<h1>You are un Users Route")
  }
  else if(url==='/comments')
  {
    res.write("<h1>You are in comments Route")
  }
  else if(url==='/createusers')
  {
        res.writeHead(200,{'content-type':'text/html'})

    res.write("<h1>You are in comments Route")
  }
  else 
  {
    res.writeHead(404,{'content-type':'text/html'})
    res.write("<h1>Sorry no more response")
  }
  
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});

setTimeout(()=>
{
    console.log("closing connections")
    server.closeIdleConnections();
}
)


