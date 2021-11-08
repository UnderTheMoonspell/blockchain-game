const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(["Master Chief", "Goku", "Sonic"],       // Names
    ["https://images.eurogamer.net/2020/articles/2020-07-17-12-19/digitalfoundry-2020-halo-3-master-chief-collection-tech-review-1594984762293.jpg/EG11/resize/1200x-1/digitalfoundry-2020-halo-3-master-chief-collection-tech-review-1594984762293.jpg", // Images
      "https://wegotthiscovered.com/wp-content/uploads/2021/07/Ultra-Instinct-Goku.jpg",
      "https://www.smashbros.com/images/og/sonic.jpg"],
    [100, 200, 100],                    // HP values
    [150, 9000, 80],  // Attack
    "Covenant", // Boss name
    "https://content.halocdn.com/media/Default/encyclopedia/factions/covenant/covenant-square-542x542-d64b90ab13ab419c937f42b24e9d6a06.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

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