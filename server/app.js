// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { FactomCli } = require('factom');

const app = express();

const cli = new FactomCli();

const multichain = require("multichain-node")({
  port: 7189,
  host: '172.17.0.2',
  user: "multichainrpc",
  pass: "7udEzUQ4E5mhKPngqZkJpPwFHMsPckiZRbuwd9axEaz9"
});

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/factom/:entry', async (req, res) => {
  const entry = req.params.entry;
  const result = await cli.getEntry('caf017da212bb68ffee2ba645e1488e5834863743d50972dd3009eab2b93eb42');
  console.log(result);
  res.send({ express: 'Hello From Express', entry: entry });
});

app.get('/api/multichain', async (req, res) => {
  multichain.getInfo((err, info) => {
    if (err) {
      throw err;
    }
    console.log(info);
    res.send({ info: info });
  })
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
