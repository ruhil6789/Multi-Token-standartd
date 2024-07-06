// SPDX-License-Identifer:MIT

pragma solidity >0.6.0 <0.9.0;

interface IrewardERC1155 {
    function _mint(
        address to,
        uint tokenId,
        uint amount,
        bytes calldata data
    ) external;

    function mintBy(
        address to,
        uint tokenId,
        uint amount,
        bytes calldata data
    ) external;
}
