var HDWalletProvider = require("truffle-hdwallet-provider");
var infuraAPIKey = "e5FVKzbpIbo1QpJLgN6l";
var mnemonic = "enter resource report gospel glad seminar gravity slight party improve meadow devote";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infuraAPIKey);
      },
      // host: "127.0.0.1",
      // port: 8180,
      network_id: 3,

    },
    develop: {
        // provider: function() {
        //   return new HDWalletProvider(mnemonicDev, "http://127.0.0.1:7545")
        // },
        host: "127.0.0.1",
        port: 7545,
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
