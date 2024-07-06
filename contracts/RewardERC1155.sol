//SPDX-License-Identifier:MIT

pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

contract RewardERC1155 is ERC1155 {
    constructor() ERC1155("") {
        // _mint(msg.sender, 10, 10**18, "");
    }

    function mintBy(
        address to,
        uint tokenId,
        uint amount,
        bytes calldata data
    ) public {
        _mint(to, tokenId, amount, data);
    }
}
