const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Path Token contract", function () {
  let PathToken;
  let Path;
  let owner;
  let addr1;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    PathToken = await ethers.getContractFactory("PathToken");

    [owner, addr1] = await ethers.getSigners();
    //deploy contract
    Path = await PathToken.deploy("125000000000000000000000000");
  });

  describe("Token Deployment", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {

      const ownerBalance = await Path.balanceOf(owner.address);
      expect(await Path.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Token Minting", function () {
    it("Mint should assign the mint number of token to the right address", async function () {
      await Path.mint(addr1.address, "100000000000000000000000000");
      const addr1Balance = await Path.balanceOf(addr1.address);
      expect(await addr1Balance).to.equal("100000000000000000000000000");
    });

    it("Mint should not be able to mint pass cap", async function () {
      await expect(
        Path.mint(addr1.address, "900000000000000000000000000")
      ).to.be.revertedWith("ERC20Capped: cap exceeded");
    });
  });
});

