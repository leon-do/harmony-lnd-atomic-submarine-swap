module.exports = {
  url: "https://api.s0.b.hmny.io", // mainnet: https://api.s0.t.hmny.io
  privateKey: "", // harmony priv key
  contractAddress: "0xFAa2b2AE3Eb4367275c1607F74e32b402cF202cf", // harmony contract address
  cert: "", // https://github.com/alexbosworth/ln-service#using-grpc 
  macaroon: "", // https://github.com/alexbosworth/ln-service#using-grpc
  socket: "127.0.0.1:10009", // ln socket
  abi: [
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_hash",
          type: "bytes32",
        },
        {
          internalType: "address payable",
          name: "_toAddress",
          type: "address",
        },
      ],
      name: "create",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_hash",
          type: "bytes32",
        },
      ],
      name: "getOrder",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_hash",
          type: "bytes32",
        },
      ],
      name: "refund",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_key",
          type: "bytes32",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
};
