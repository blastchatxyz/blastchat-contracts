// 2. Deploy NFT contract
// npx hardhat run scripts/post/IggyPostNft1155/2_iggyPostNft1155.deploy.js --network blastSepolia

const contractName = "IggyPostNft1155";

const defaultPrice = ethers.utils.parseEther("0.00001"); // TODO: change price!!!
const blastAddress = "0x4300000000000000000000000000000000000002";
const blastGovernor = "0xC6c17896fa051083324f2aD0Ed4555dC46D96E7f";
const metadataAddress = "0x633Ae857445cF0cd02B21C6a3033C7CE74fB32c2";
const collectionName = "BlastChat Posts";
const collectionSymbol = "BLASTCHATPOST";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contract
  const contract = await ethers.getContractFactory(contractName);
  const instance = await contract.deploy(
    defaultPrice, 
    blastAddress,
    blastGovernor,
    metadataAddress, 
    collectionName, 
    collectionSymbol
  );
  
  console.log(contractName + " contract address:", instance.address);

  console.log("Wait a minute and then run this command to verify contracts on block explorer:");
  console.log("npx hardhat verify --network " + network.name + " " + instance.address + ' "' + defaultPrice + '" ' + blastAddress + " " + blastGovernor + " " + metadataAddress + ' "' + collectionName + '" "' + collectionSymbol + '"');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });