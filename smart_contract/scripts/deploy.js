const main = async() => {

    const RealEstate = await hre.ethers.getContractFactory("realEstate");
    const accounts = await hre.ethers.getSigners();

    const constructorArgs = ["M5G1R1", "0x435fefd34", accounts[0].address, 30]
    const transactions = await RealEstate.deploy(...constructorArgs);

    await transactions.deployed();
    const admin = accounts[0].address
    const admin_state = await transactions.isStakeholder(accounts[1].address)
    console.log(admin_state)
    await transactions.claimOwnership(accounts[1].address)
    const admin_state_after = await transactions.isStakeholder(accounts[1].address)
    console.log(admin_state_after);
    console.log("Transactions deployed to:", transactions.address);
}
const runMain = async() => {
    try {
        await main()
        process.exit(0)
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

runMain()