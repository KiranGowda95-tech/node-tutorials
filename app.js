// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     res.end("welcome to our home page");
//   }

//   if (req.url === "/about") {
//     res.end("here is our short history");
//   }
//   //blocking code
//   if (req.url === "/blockcode") {
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//   }
//   res.end(`<h1>Oops!!</h1>
//   <p>we cont seem tofind the page you are looking for</p>
//   <a href='/home'>back home</a>
//   `);
// });

// server.listen(5000, () => {
//   console.log("server listening on port:5000...");
// });

// const lodash = require("lodash");

// const items = [1, [2, [3, [4]]]];

// const newItems = lodash.flattenDeep(items);

// console.log("new item is", newItems);

// console.log("Hello People ");

//const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf8");
//     await writeFile(
//       "./content/newFile.txt",
//       `This is awesome: ${first}, from the first file`,
//       {
//         flag: "a",
//       }
//     );
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
// const getText = (path) => {
//   return new ((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const EventEmiter = require("events");

// const customEmitter = new EventEmiter();

// customEmitter.on("response", (name, id) => {
//   console.log(`data received to ${name} of id ${id}`);
// });

// customEmitter.emit("response", "kiran", 46);

//streams-Http example

// var http = require("http");
// var fs = require("fs");
// //console.log(fs.createReadStream());
// http
// .createServer(function (req, res) {
//   // const text = fs.readFileSync("./content/first.txt", "utf8");
//   // res.end(text);
//   const fileStream = fs.createReadStream("./content/newFile.txt", "utf8");
//   fileStream.on("open", () => {
//     fileStream.pipe(res);
//   });
//   fileStream.on("err", (err) => {
//     res.end(err);
//   });
// })
// .listen(5000, () => {
//   console.log("server is up on: 5000..");
// });

const http = require("http");
const { readFileSync } = reqire("fs");
//get all files
const homePage = readFileSync("./index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  //Home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1 style='color:red;'>Page not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is up on :5000...");
});
