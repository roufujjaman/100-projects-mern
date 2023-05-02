const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/script.js") {
        fs.readFile("script.js", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/javascript"})
            res.write(data);
            res.end();
        })
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write("<h1>404 NOT FOUNDM</h1>")
    }
})

server.listen(port, ()=> {
    console.log("Started listening at", port);
});