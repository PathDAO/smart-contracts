async function main() {
    // Grab the contract factory 
    const Path = await ethers.getContractFactory("Path");
 
    // Start deployment, returning a promise that resolves to a contract object
    const pathDeploy = await Path.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", pathDeploy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });