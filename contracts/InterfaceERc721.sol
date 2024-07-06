//SPDX-License-Identifier:MIT

pragma solidity >=0.6.0 <0.9.0;

interface IrewardERC721 {
    function safeMint(address to, uint tokenId) external;

    function transferFrom(
        address from,
        address to,
        uint tokenId
    ) external;
}
