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

const EventEmiter = require("events");

const customEmitter = new EventEmiter();

customEmitter.on("response", (name, id) => {
  console.log(`data received to ${name} of id ${id}`);
});

customEmitter.emit("response", "kiran", 46);
