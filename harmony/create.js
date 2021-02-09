const Web3 = require("web3");
const BN = require("bn.js");
const config = require("../config");

async function create(_hash, _toAddress, _value) {
  const web3 = new Web3(config.url);

  const harmony = web3.eth.accounts.privateKeyToAccount(config.privateKey);
  web3.eth.accounts.wallet.add(harmony);
  web3.eth.defaultAccount = harmony.address;

  const from = web3.eth.defaultAccount;
  const value = _value * 1e18;
  const gasPrice = new BN(await web3.eth.getGasPrice()).mul(new BN(1));
  const gasLimit = 6721900;

  // https://docs.harmony.one/home/developers/wallets/metamask/using-metamask-with-harmony-smart-contracts#making-a-payable-contract-call
  const contract = new web3.eth.Contract(config.abi, config.contractAddress);
  const transaction = await contract.methods.create(_hash, _toAddress).send({
    from,
    value,
    gasPrice,
    gasLimit,
  });
  /*
  {
    blockHash: '0xc92aa8cb540573b18307110650e03edef4f7b34090da6410aa511453ad5df02c',
    blockNumber: 5608504,
    contractAddress: null,
    cumulativeGasUsed: 105094,
    from: '0x45bb81406cd27033b318f31185e789af9c3ee6e1',
    gasUsed: 105094,
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    to: '0xfaa2b2ae3eb4367275c1607f74e32b402cf202cf',
    transactionHash: '0x805b69569f8232eb0a60632b2b708c918e8336c7925eb73563167f05055ba98f',
    transactionIndex: 0,
    events: {}
  }
  */
  return transaction;
}

module.exports = create;
