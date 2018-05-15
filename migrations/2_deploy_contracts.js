var bounty = artifacts.require("./Bounty.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  //deployer.deploy(StandardToken);
  deployer.deploy(bounty);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
