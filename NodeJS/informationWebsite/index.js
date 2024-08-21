const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  const extname = String(path.extname(filePath)).toLowerCase();

  const validExtensions = [".html"];
  const isValidExt = validExtensions.includes(extname);

  fs.readFile(
    isValidExt ? filePath : path.join(__dirname, "404.html"),
    (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
        return;
      }

      if (
        isValidExt ||
        req.url === "/" ||
        req.url === "/about" ||
        req.url === "/contact-me"
      ) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf-8");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(content, "utf-8");
      }
    }
  );
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
