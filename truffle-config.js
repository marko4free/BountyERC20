var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "mutual play cover just few amused north robot gentle popular slam thought";//"unlined reconfirm regroup pried founding dilation epidural sarcasm clever decode washbowl almanac";
var mnemonicDev = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";//"net habit matrix ritual fit crucial idea print tree expose fever tuna";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/e5FVKzbpIbo1QpJLgN6l")
      },
      host: "127.0.0.1",
      port: 8180,
      network_id: 3,

    },
    development: {
        provider: function() {
          return new HDWalletProvider(mnemonicDev, "http://127.0.0.1:7545")
        },
        // host: "127.0.0.1",
        // port: 7545,
        network_id: "*" // Match any network id
      }
  },
  rpc: {
		host: "localhost",
		gas: 4712388,
		port: 8545
	}
	// solc: {
	// 	optimizer: {
	// 		enabled: true,
	// 		runs: 200
	// 	}
	// }
 //  networks: {
 //   development: {
 //     provider: function() {
 //       return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545")
 //     },
 //     // host: "127.0.0.1",
 //     // port: 7545,
 //     network_id: "*" // Match any network id
 //   }
 // }
// account0 = web3.eth.accounts[0]
//account1 = web3.eth.accounts[1]
//Bounty.deployed().then(inst => { BountyInstance = inst })
//BountyInstance.account0.call()
//BountyInstance.registerAsAnOpponent({from: account1})

};
