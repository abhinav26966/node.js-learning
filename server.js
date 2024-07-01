const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Node.js Class</title></head><body>');

    if (req.url === '/login') {
        res.write('<h1>Hello, Login!</h1>');
    } else {
        res.write('<h1>Hello, World!</h1>');
    }

    res.write('</body></html>');
    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
