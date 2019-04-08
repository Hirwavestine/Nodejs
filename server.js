const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hi my People, I am Hirwa nice to meet you!</h1>");
});
server.listen(9111);
console.log("Our server is running good");
