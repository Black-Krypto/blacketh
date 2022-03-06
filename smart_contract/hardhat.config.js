require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: '0.7.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/qqzbBW3ZVIBF7ogmWwuel26gOrHC5oh7',
            accounts: ['a91f3f8f429eee24be2c8417df6ea91c97d5bf81a54e24dd8525b3d08a87c98c', '36ec53a8d1c03ccd9aca821c5286680fc1abf16143f2af7f893be7402f505918'],
        },
    },
};