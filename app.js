const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to my home page");
  res.end();
});
console.log("server is running in local host 5000");
server.listen(5000);
