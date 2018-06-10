// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { FactomCli } = require('factom');
const got = require('got');
const axios = require('axios');
const config = require('./config');

const app = express();

const multichain = require("multichain-node")({
  port: config.multichain.port,
  host: config.multichain.host,
  user: config.multichain.user,
  pass: config.multichain.pass,
});

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

/* result {}
explorerUrl
content in cleartext?
the fact that it 

*/ 
app.get('/api/factom/entry/:entry', async (req, res) => {
  const entry = req.params.entry;

  try {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'factom-provider-token': `${config.factom.apiKey}` },
      url: `https://apiplus-api-sandbox-testnet.factom.com/v1/chains/${config.factom.chainHash}/entries/${entry}`,
    };
    const response = await axios(options);
    console.log(response);

    const explorerUrl = `https://explorer-sandbox-testnet.factom.com/chains/${config.factom.chainHash}/entries/${entry}`;

    const result = {
      explorerUrl: explorerUrl,
      content: response.data.content,
    };

    res.send(result);
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
