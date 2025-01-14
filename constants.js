// export const zkSyncContractAddress = "0x4B5DF730c2e6b28E17013A1485E5d9BC41Efe021"
// export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"   //这个是智能合约的地址
//从out处复制了新的abi
export const abi = 
[
  {
      "type": "constructor",
      "inputs": [
          {
              "name": "priceFeed",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "fallback",
      "stateMutability": "payable"
  },
  {
      "type": "receive",
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "MINIMUM_USDT",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "fund",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "getAddressToFunders",
      "inputs": [
          {
              "name": "fundingAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getFunders",
      "inputs": [
          {
              "name": "index",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getOwner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getVersion",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "i_owner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "withDraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "error",
      "name": "NotOwner",
      "inputs": []
  }
]


/*[
  {
    inputs: [
      { internalType: "address", name: "priceFeed", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "FundMe__NotOwner",
    type: "error"
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "cheaperWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fundingAddress",
        type: "address"
      }
    ],
    name: "getAddressToAmountFunded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "getFunder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withDraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
]*/