var bounty = artifacts.require("./BountyBG");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(bounty);
};
