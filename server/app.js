// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { FactomCli } = require('factom');

const app = express();

const cli = new FactomCli();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/hello', async (req, res) => {
  const entry = await cli.getEntry('caf017da212bb68ffee2ba645e1488e5834863743d50972dd3009eab2b93eb42');
  console.log(entry);
  res.send({ express: 'Hello From Express', entry: entry });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
