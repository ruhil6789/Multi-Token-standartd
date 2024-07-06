//SPDX License-identifier:MIT

pragma solidity >=0.6.0 <0.9.0;

interface IrewardERC20 {
    function mint(address to, uint amount) external;

    function transfer(address to, uint amount) external;

    function transferFrom(
        address from,
        address to,
        uint amount
    ) external;
}
