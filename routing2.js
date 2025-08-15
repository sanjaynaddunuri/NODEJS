const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<h1>this is home page");
    res.end()
  } else if (url === "/login") {
    res.writeHead(200, { "content-type": "text/html" });

    res.write(`
        <html> 
        <body bgcolor=green text=yellow> 
        <center> 
            <h1><u>Login Form</u></h1> 
            <form method='post' action='/login-success'> 
            Username <input type=text name=uname><br> <br>
            Password <input type=password name=pword><br><br> 
            <input type=Submit><input type=Reset> 
        </form> 
        </center> 
        </body> 
        </html> 
        `);
  } else if (url === '/login-success' && req.method === 'POST') {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>login success</h1>");
  }
  res.end();
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});

setTimeout(() => {
  console.log("closing connections");
  server.closeIdleConnections();
});
