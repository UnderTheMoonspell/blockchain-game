const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(["Master Chief", "Goku", "Ryu"],       // Names
    ["https://images.eurogamer.net/2020/articles/2020-07-17-12-19/digitalfoundry-2020-halo-3-master-chief-collection-tech-review-1594984762293.jpg/EG11/resize/1200x-1/digitalfoundry-2020-halo-3-master-chief-collection-tech-review-1594984762293.jpg", // Images
      "https://wegotthiscovered.com/wp-content/uploads/2021/07/Ultra-Instinct-Goku.jpg",
      "https://static.wikia.nocookie.net/p__/images/e/e4/Ryo_Hazuki_PXZ2.png/revision/latest/top-crop/width/360/height/360?cb=20180113000551&path-prefix=protagonist"],
    [100, 200, 100],                    // HP values
    [150, 9000, 80],  // Attack
    "Reaper", // Boss name
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/OW2_Reaper.png/revision/latest?cb=20210623082134", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);


  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done deploying and minting!");

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