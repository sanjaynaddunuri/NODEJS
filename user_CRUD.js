const http = require("http");
const url1 = require("url");

const { users } = require("./routing_data");

const server = http.createServer((req, res) => {
  const { users, method } = req;
  const userid = +req.url.split("users/").pop();
  const urlobj = url1.parse(req.url);

  console.log(urlobj);
  if (url === "./") {
    res.write("<h1> this is home page</h1>");
  } else if (url === "/users " &&method=="GEt") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(JSON.stringify(users));
    res.end();
  } else if (url.includes("/users") && userid &&method=="GEt") {
    const user = users.find((usr) => usr.id === userid);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(user));
    res.end();
  }
  else if (url.includes("/users") && method==='POST') {
   res.write("<h1> user created successfully")
    res.end();
  }
});
server.listen(5000, () => {
  console.log("server running on 5000 port");
});
