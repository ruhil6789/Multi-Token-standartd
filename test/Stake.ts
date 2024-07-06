import {ethers} from"hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { mineBlocks } from "./Utilities/utilities";
import { RewardERC1155, RewardERC1155__factory, RewardERC20, RewardERC20__factory, RewardERC721, RewardERC721__factory, Staking, Staking__factory } from "../typechain-types";
import { experimentalAddHardhatNetworkMessageTraceHook } from "hardhat/config";
import {expect,assert} from "chai";
import { erc1155 } from "../typechain-types/@openzeppelin/contracts/token";

describe("Contract deployment", async()=>{
 
    let rewardERC20: RewardERC20
    let rewardERc721:RewardERC721;
    let Staking :Staking;
    let rewardERC1155:RewardERC1155;
let owner:SignerWithAddress;
let signers:SignerWithAddress[];

beforeEach("contracts",async()=>{

signers =await ethers.getSigners();
owner =signers[0];

rewardERC20 = await new RewardERC20__factory(owner).deploy("SS","ss");
rewardERc721 =await new RewardERC721__factory(owner).deploy("ss","ss");

rewardERC1155 = await new RewardERC1155__factory(owner).deploy();

Staking = await new Staking__factory(owner).deploy(rewardERC20.address,rewardERc721.address, rewardERC1155.address);
    
})


it("should stake the amount",async()=>{

console.log("initial amount",Staking.connect(owner).stake({value:10}));
console.log("amount is stake by the user");
await mineBlocks(ethers.provider,100);


//await Staking.connect()

})
//correct
it("should fail when amount is less than  1ether",async()=>{

 //expect(await Staking.connect(owner).stake({value:0})).to.be.revertedWith("user need to stake more than 1 eth");
expect(await Staking.connect(owner).stake({value:1})).to.be.revertedWith("user need to stake more than 1 eth");
//await(rewardERC20.connect(owner).approve(signers[1].address,2));
console.log(rewardERC20.balanceOf(owner.address));
await Staking.connect(owner).unstake(0);
console.log( rewardERC20.balanceOf(owner.address));

})
// correct
it(" should stake ether more than 1",async()=>{

await Staking.connect(owner).stake({value:4});
await Staking.connect(owner).stake({value:4});
await Staking.connect(owner).stake({value:4});
await Staking.connect(owner).stake({value:4});

//  console.log("1");
//await mineBlocks(ethers.provider,60);
console.log("before unstake", await rewardERC20.balanceOf(owner.address));
  await Staking.connect(owner).unstake(1);
console.log("after unstake",await rewardERC20.balanceOf(owner.address));

})
it(" should stake ether more than 5 user",async()=>{

await Staking.connect(owner).stake({value:6});
await Staking.connect(owner).stake({value:6});
await Staking.connect(owner).stake({value:8});
await Staking.connect(owner).stake({value:9});

//  console.log("1");
//await mineBlocks(ethers.provider,60);
await rewardERC20.connect(owner).approve(owner.address,7);
// console.log("before unstake", await rewardERC20.balanceOf(owner.address));
console.log("before unstake", await rewardERC20.balanceOf(owner.address));  
await Staking.connect(owner).unstake(2);
console.log("after unstake",await rewardERC20.balanceOf(owner.address));

})
//doubt
it("mint rewarderc1155  when ether is neither 1 nor 5",async()=>{

await Staking.connect(owner).stake({value:2});
await Staking.connect(owner).stake({value:6});
await Staking.connect(owner).stake({value:8});
await Staking.connect(owner).stake({value:7});

await rewardERC1155.connect(owner).balanceOf(owner.address,1);
//await rewardERC1155.connect(owner).ownerOf(tokenId);
console.log("before unstake",await rewardERC1155.balanceOf(owner.address,1));
await Staking.connect(owner).unstake(3);
console.log("after unstake", await rewardERC1155.balanceOf(owner.address,1));


})

it("mint erc1155 when entry time is more than 50 sec", async()=>{
// await mineBlocks(ethers.provider,40);

await Staking.connect(owner).stake({value:10});

// await Staking.connect(owner).stake({value:3});
// await Staking.connect(owner).stake({value:2});
// await Staking.connect(owner).stake({value:4});

 
console.log("4");
//console.log("inital erc1155 is",await rewardERC1155.balanceOf(owner.address,2));
await mineBlocks(ethers.provider,60);
console.log("print");
await Staking.connect(owner).unstake(0);
console.log("4");

//console.log("after balance is", await rewardERC1155.balanceOf(owner.address,2));
})

it("mint erc1155 when entry time is more than 25 sec", async()=>{
 
 // expect(await mineBlocks(ethers.provider,26)).be.equal(26);

await Staking.connect(owner).stake({value:1});
// await Staking.connect(owner).stake({value:3});
// await Staking.connect(owner).stake({value:2});
// await Staking.connect(owner).stake({value:4});
console.log("4");
//expect(await mineBlocks(ethers.provider,26)).be.equal(26);
//expect(await mineBlocks(ethers.provider,20)).be.equal(20);
await mineBlocks(ethers.provider,26);
console.log("4");
//console.log("inital erc1155 is",await rewardERC1155.));

await Staking.connect(owner).unstake(0);
console.log("4");

//console.log("after balance is", await rewardERC1155.balanceOf(owner.address,1));
})

it("should mint the nft when time is more than 10",async()=>{

await Staking.connect(owner).stake({value:1});
await Staking.connect(owner).stake({value:1});
console.log("2");

await mineBlocks(ethers.provider,11);
console.log("1");

await Staking.connect(owner).unstake(0);
console.log("done");
})
})





