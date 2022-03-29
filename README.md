# RoboPunksNFT Minting dApp 

This project demonstrates a RoboPunksNFT Minting dApp build using Solidity, Openzeppelin, Hardhat, Ethers, ReactJS & ChakraUI.

There is an .env file which contains the Rinkeby RPC URL (From Infura), Etherscan API key & Metamask Private Key (Owner/Deployer) which is used in the hardhat config file. It helps us to deploy and verify the smart contract using our local CLI.

Create Hardhat Code Template
```
npx i -D hardhat
npx hardhat
```

The Smart Contract
```
For this example, we are using a simple safeMint ERC721 smart contract using Openzeppelin.
You can also use a ERC721A smart contract by [Azuki](https://github.com/chiru-labs/ERC721A).
ERC721A is much more gas efficient for minting multiple NFTs in a single transaction.
```

Deploy & Compile the Smart Contract 
```
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deployRoboPunksNFT.js --network rinkeby
```

Verify the Contract to Read & Write
```
npx i -D @nomiclabs/hardhat-etherscan
npx hardhat verify --network rinkeby 0x8efF798105831AeeAd8dB02Eb24E174C7F92aEEC (deployed address)
```