const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url === '/login') {
        res.write('<html><head><title>Node.js Class</title></head><body>');
        res.write('<h1>Hello, Login!</h1>');
        res.write('</body></html>');
        res.end();
    } else {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
