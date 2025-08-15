const { users, posts, comments } = require("./routing_data.js");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.write("<h1> you are in Home Route");
  } else if (url === "/users") {
    res.write(JSON.stringify(users));
  } else if (url === "/comments") {
    res.write(JSON.stringify(comments));
  } else if (url === "/posts") {
    res.write(JSON.stringify(posts));
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Sorry no more response");
  }
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});

setTimeout(() => {
  console.log("closing connections");
  server.closeIdleConnections();
});
