const main = async () => {
  const transceiverContractFactory = await hre.ethers.getContractFactory(
    "Transceiver"
  );
  const transceiverContract = await transceiverContractFactory.deploy();
  await transceiverContract.deployed();
  console.log("Contract deployed to:", transceiverContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
