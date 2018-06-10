// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { FactomCli } = require('factom');
const got = require('got');
const axios = require('axios');

const PEACH_CHAIN_HASH = '04fc7129d25d2d3068eea5c8a51413d2b42ebbb789229653401091a3915918f2';

const app = express();

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

app.get('/api/factom/entry/:entry', async (req, res) => {
  const entry = req.params.entry;

  try {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'factom-provider-token': 'rezRmi8w1NCmAur6KSRx58wWvcok8PuAxiTxS0h6L46eDKtb' },
      url: `https://apiplus-api-sandbox-testnet.factom.com/v1/chains/${PEACH_CHAIN_HASH}/entries/${entry}`,
    };
    const response = await axios(options);
    console.log(response);
    const result = await response.data;
    res.send({ express: req.params.entry, result: result });
  } catch (err) {
    throw err;
  }  
});

app.get('/api/multichain/tx/:txId', async (req, res) => {
  const txId = req.params.txId;
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
