const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Me pidieron ${req.url}`);

  if (req.url === "/") {
    res.write("Que pedo morro estas en mi home");
    res.end();
  } else if (req.url === "/home") {
    res.write("Estas en el home mijo");
    res.end();
  } else {
    res.statusCode = 404;
    res.write("404 not found");
    res.end();
  }
});

server.listen(3000);
