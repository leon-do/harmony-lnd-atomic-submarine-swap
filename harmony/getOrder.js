const Web3 = require("web3");
const config = require("../config");

async function getOrder(_hash) {
  const web3 = new Web3(config.url);

  const harmony = web3.eth.accounts.privateKeyToAccount(config.privateKey);
  web3.eth.accounts.wallet.add(harmony);
  web3.eth.defaultAccount = harmony.address;

  // https://docs.harmony.one/home/developers/wallets/metamask/using-metamask-with-harmony-smart-contracts#making-a-read-only-call
  const contract = new web3.eth.Contract(config.abi, config.contractAddress);
  const order = await contract.methods.getOrder(_hash).call();
  /*
  {
    '0': 'one1gkaczsrv6fcr8vcc7vgcteuf47wraehpwqsngh',
    '1': 'one19t4yeh8lqg5fdsdecj32yf8wu7fkazu9lcjft5',
    '2': '1000000000000000000',
    '3': '1612716574'
  }
  */
  return {
    fromAddress: order[0],
    toAddress: order[1],
    value: order[2],
    expirationTime: order[3]
  };
}

module.exports = getOrder;