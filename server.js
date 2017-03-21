const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

const port = 7070;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
