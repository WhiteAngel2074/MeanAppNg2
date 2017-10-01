// Get Depencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get API routes
const api = require('./server/routes/api');
const app = express();

// Parsers for POST Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to DIST
app.use(express.static(path.join(__dirname, 'dist')));

// SET our api routes
app.use('/api', api);

// catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

// PORT
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
