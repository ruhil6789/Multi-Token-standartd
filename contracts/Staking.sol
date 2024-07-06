// SPDX-License-Identifier:MIT

pragma solidity >=0.6.0 <0.9.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
//import "./RewardERC20.sol";
import "./InterfaceERc20.sol";
import "./InterfaceErc1155.sol";
//import "./RewardERC721.sol";
//import "./RewardERC1155.sol";
import "./InterfaceERc721.sol";

contract Staking {
    IrewardERC20 public immutable rewardERC20;
    IrewardERC721 public immutable rewardERC721;
    IrewardERC1155 public immutable rewardERC1155;

    constructor(
        address _rewardERC20,
        address _rewardERC721,
        address _rewardERC1155
    ) {
        rewardERC20 = IrewardERC20(_rewardERC20);
        rewardERC721 = IrewardERC721(_rewardERC721);
        rewardERC1155 = IrewardERC1155(_rewardERC1155);
    }

    struct User {
        uint entryTime;
        uint amountInEther;
    }
    // User[] public users;
    mapping(address => User[]) public Users;
    //mapping(address => mapping(uint => User)) public users;
    mapping(address => uint) public tokenId;
    // mapping(address => uint) public startTime;
    event Received(address, uint);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function stake() public payable {
        require(msg.value >= 1, "user need to stake more than 1 eth");

        Users[msg.sender].push(
            User({amountInEther: msg.value, entryTime: block.timestamp})
        );
    }

    function unstake(uint index) public payable {
        //first check the time and reward accordingly, then check the amount, if its greater than 1, or 5 (ether
        // console.log("hello");
        if (Users[msg.sender][index].amountInEther > 1**18) {
            //check the time here, if its maturity above 50, or 25 or 10.
            rewardERC20.mint(
                msg.sender,
                Users[msg.sender][index].amountInEther +
                    ((Users[msg.sender][index].amountInEther * 2) / 100)
            );
            console.log("1");
        } else if (Users[msg.sender][index].amountInEther >= 5) {
            console.log("amount send to user");
            rewardERC20.mint(
                msg.sender,
                Users[msg.sender][index].amountInEther +
                    ((Users[msg.sender][index].amountInEther * 5**18) / 100)
            );
        }
        // console.log("2");
        else if (block.timestamp >= Users[msg.sender][index].entryTime + 50) {
            console.log("2", Users[msg.sender][index].entryTime);
            rewardERC1155.mintBy(msg.sender, tokenId[msg.sender], 1, "");

            console.log("2");
        } else if (block.timestamp >= Users[msg.sender][index].entryTime + 25) {
            console.log("yippie");
            rewardERC721.safeMint(msg.sender, tokenId[msg.sender]);
        } else {
            console.log("2", Users[msg.sender][index].entryTime);

            rewardERC1155.mintBy(msg.sender, tokenId[msg.sender], 20, "");
            console.log("6");
        }
    }
}
