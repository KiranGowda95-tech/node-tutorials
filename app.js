const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`<h1>Oops!!</h1>
  <p>we cont seem tofind the page you are looking for</p>
  <a href='/home'>back home</a>
  `);
});
console.log("server is running in local host 5000");
server.listen(5000);

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);

console.log("new item is", newItems);
