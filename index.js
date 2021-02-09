const config = require("./config");
const express = require("express");
const app = express();
const lnService = require("ln-service");
const harmony = require("./harmony");

// connect to lnd
const { lnd } = lnService.authenticatedLndGrpc({
  cert: config.cert,
  macaroon: config.macaroon,
  socket: config.socket
});

app.use(express.json()).post("/", async (req, res) => {
  const { bitcoin, toAddress } = req.body;

  // create bitcoin invoice
  const invoice = await lnService.createInvoice({
    lnd,
    tokens: (bitcoin * 100000000).toString(), // 100000000 satoshis = 1 btc
  });

  // 1 BTC == 321 ONE
  const oneToken = bitcoin * 321;

  // create harmony order using the same hash from the bitcoin invoice
  // const hash = "0x" + invoice.id;
  // const { transactionHash } = await harmony.create(hash, toAddress);

  // user verifies transaction, then pays invoice
  res.send({
    invoice: invoice.request,
    transaction: "transactionHash",
  });
});

lnService.subscribeToInvoices({ lnd }).on("invoice_updated", (x) => {
  console.log(x);
});

lnService.subscribeToForwards({ lnd }).on("forward", (x) => {
  console.log(x);
});

app.listen(3000, () => console.log("listening on port 3000"));
