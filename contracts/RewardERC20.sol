//SPDX-License-Identifier;MIT

pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

//import "./InterfaceERc20.sol";

contract RewardERC20 is ERC20 {
    constructor(string memory name, string memory symbol)
        ERC20("name", "symbol")
    {}

    function mint(address to, uint amount) public {
        _mint(to, amount);
    }

    // function transfer(address to, uint amount) public {
    //     _transfer( from, to , amount);
    // }
}
