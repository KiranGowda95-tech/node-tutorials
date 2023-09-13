const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("here is our short history");
  }
  //blocking code
  if (req.url === "/blockcode") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
  }
  res.end(`<h1>Oops!!</h1>
  <p>we cont seem tofind the page you are looking for</p>
  <a href='/home'>back home</a>
  `);
});

server.listen(5000, () => {
  console.log("server listening on port:5000...");
});

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);

console.log("new item is", newItems);

console.log("Hello People ");
