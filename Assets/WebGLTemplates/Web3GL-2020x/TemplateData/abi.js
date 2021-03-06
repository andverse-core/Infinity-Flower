
const FlowerABI=[
    { "type": "constructor", "stateMutability": "nonpayable", "inputs": [] },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        { "type": "address", "name": "owner", "internalType": "address", "indexed": true },
        { "type": "address", "name": "approved", "internalType": "address", "indexed": true },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256", "indexed": true }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        { "type": "address", "name": "owner", "internalType": "address", "indexed": true },
        { "type": "address", "name": "operator", "internalType": "address", "indexed": true },
        { "type": "bool", "name": "approved", "internalType": "bool", "indexed": false }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DynamicPropertyUpdated",
      "inputs": [
        { "type": "uint256", "name": "tokenId", "internalType": "uint256", "indexed": false },
        { "type": "bytes32", "name": "propertyId", "internalType": "bytes32", "indexed": false },
        { "type": "uint256", "name": "propertyValue", "internalType": "uint256", "indexed": false }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        { "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true },
        { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        { "type": "address", "name": "from", "internalType": "address", "indexed": true },
        { "type": "address", "name": "to", "internalType": "address", "indexed": true },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256", "indexed": true }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
      "name": "HEIGHT",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
      "name": "LIGHT",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
      "name": "LOVE",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
      "name": "WATER",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "approve",
      "inputs": [
        { "type": "address", "name": "to", "internalType": "address" },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
      "name": "balanceOf",
      "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bytes32[]", "name": "", "internalType": "bytes32[]" }],
      "name": "dynamicProperties",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
      "name": "getApproved",
      "inputs": [{ "type": "uint256", "name": "tokenId", "internalType": "uint256" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
      "name": "getDynamicProperty",
      "inputs": [
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" },
        { "type": "bytes32", "name": "propertyId", "internalType": "bytes32" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        { "type": "bytes32[]", "name": "properties", "internalType": "bytes32[]" },
        { "type": "uint256[]", "name": "values", "internalType": "uint256[]" }
      ],
      "name": "info",
      "inputs": [{ "type": "uint256", "name": "tokenId", "internalType": "uint256" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
      "name": "isApprovedForAll",
      "inputs": [
        { "type": "address", "name": "owner", "internalType": "address" },
        { "type": "address", "name": "operator", "internalType": "address" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "mint",
      "inputs": [
        { "type": "address", "name": "to", "internalType": "address" },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
      "name": "name",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
      "name": "owner",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
      "name": "ownerOf",
      "inputs": [{ "type": "uint256", "name": "tokenId", "internalType": "uint256" }]
    },
    { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "safeTransferFrom",
      "inputs": [
        { "type": "address", "name": "from", "internalType": "address" },
        { "type": "address", "name": "to", "internalType": "address" },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "safeTransferFrom",
      "inputs": [
        { "type": "address", "name": "from", "internalType": "address" },
        { "type": "address", "name": "to", "internalType": "address" },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" },
        { "type": "bytes", "name": "_data", "internalType": "bytes" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "setApprovalForAll",
      "inputs": [
        { "type": "address", "name": "operator", "internalType": "address" },
        { "type": "bool", "name": "approved", "internalType": "bool" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "payable",
      "outputs": [],
      "name": "setDynamicProperty",
      "inputs": [
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" },
        { "type": "bytes32", "name": "propertyId", "internalType": "bytes32" },
        { "type": "uint256", "name": "", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
      "name": "supportsInterface",
      "inputs": [{ "type": "bytes4", "name": "interfaceId", "internalType": "bytes4" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
      "name": "supportsProperty",
      "inputs": [{ "type": "bytes32", "name": "propertyId", "internalType": "bytes32" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
      "name": "symbol",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
      "name": "tokenURI",
      "inputs": [{ "type": "uint256", "name": "tokenId", "internalType": "uint256" }]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "transferFrom",
      "inputs": [
        { "type": "address", "name": "from", "internalType": "address" },
        { "type": "address", "name": "to", "internalType": "address" },
        { "type": "uint256", "name": "tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "transferOwnership",
      "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }]
    },
    { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdraw", "inputs": [] }
  ]



