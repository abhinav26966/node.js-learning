const fs = require('fs');

// Asynchronous read
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content: ' + data);
// });

// // Synchronous read (just for demonstration; asynchronous is preferred)
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log('Synchronous read: ' + data);

// // Append file function
// fs.appendFile('file.txt', 'Hello content!', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File write successful');
// });

// Make Directory Function
// fs.mkdir('dir1', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }
//     console.log('Directory creation successful');
// });
// const fs = require('fs');
const path = require('path');

const srcPath = 'file1.txt';
const destDir = 'dir1';
const destPath = path.join(destDir, 'file1.txt');

// Create Directory if it doesn't exist
// if (!fs.existsSync(destDir)) {
//     fs.mkdirSync(destDir);
// }

// Copy content from file1.txt to dir1/file1.txt
fs.readFile(srcPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    fs.writeFile(destPath, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File copied successfully to', destPath);
    });
});


// Rename Function
// fs.rename('file.txt', 'file1.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//         return;
//     }
//     console.log('File rename successful');
// });

// const p = "/sst-backend/file.txt";
// const path = require("path");

// const dirname = path.dirname(p);
// const extension = path.extname(p);

// console.log([dirname, extension]);

// fs.cpSync()
