import { createServer } from "node:http";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { serveStatic } from "./utils/serveStatic.js";
import fs from "node:fs/promises";

const PORT = 8000;

// console.log(import.meta.dirname);
const __dirname = import.meta.dirname;
// console.log(__dirname); // oldschool node, without "type": "module"

// console.log("CWD", process.cwd());

const server = createServer(async (req, res) => {
  //   const absPathToResource = path.join(__dirname, "public", "index.html");
  //   const relPathToResource = path.join("public", "index.html");
  //   console.log("absolute: ", absPathToResource);
  //   console.log("relative: ", relPathToResource);

  //   const content = fs.readFileSync(serveStatic(__dirname), "utf8");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<html><h1>The server is working</h1></html>");
  //   res.end(content);

  //   fs.readFile(serveStatic(__dirname), "utf8", (err, content) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(content);
  //   });

  await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
