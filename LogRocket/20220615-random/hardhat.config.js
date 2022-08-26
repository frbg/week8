require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/Ib-1MxJX-FMZRKZB9HFD_qv_uSOKnSNS",
       accounts: ["fa813c452cfd979afd418537d4872bdbaaa98cf68626eaf46feab6ddc202fa63"]
    }
  }

};
