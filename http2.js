const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("<h1>response from server....<h1>");
  res.end();
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
