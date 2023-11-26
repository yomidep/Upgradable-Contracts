// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

const BOX_ADDRESS = "0x0CBF521A28Ab0E46F2fd580ed77115a6a7dEF64D"
async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
  console.log("Box upgraded");
}

main();