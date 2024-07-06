/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Staking, StakingInterface } from "../../contracts/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardERC20",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardERC721",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardERC1155",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Users",
    outputs: [
      {
        internalType: "uint256",
        name: "entryTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInEther",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardERC1155",
    outputs: [
      {
        internalType: "contract IrewardERC1155",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardERC20",
    outputs: [
      {
        internalType: "contract IrewardERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardERC721",
    outputs: [
      {
        internalType: "contract IrewardERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200173938038062001739833981810160405281019062000037919062000146565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505050620001a2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010e82620000e1565b9050919050565b620001208162000101565b81146200012c57600080fd5b50565b600081519050620001408162000115565b92915050565b600080600060608486031215620001625762000161620000dc565b5b600062000172868287016200012f565b935050602062000185868287016200012f565b925050604062000198868287016200012f565b9150509250925092565b60805160a05160c051611544620001f56000396000818161021e015281816107980152610acd01526000818161095c0152610be10152600081816102ac015281816105080152610cf501526115446000f3fe6080604052600436106100745760003560e01c80632f4d67841161004e5780632f4d67841461013e5780633a4b66f1146101695780637ca3172414610173578063d10b5a5b146101b0576100b4565b806313e8544e146100b957806315cd0d1c146100f75780632e17de7814610122576100b4565b366100b4577f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587433346040516100aa929190610ecf565b60405180910390a1005b600080fd5b3480156100c557600080fd5b506100e060048036038101906100db9190610f55565b6101db565b6040516100ee929190610f95565b60405180910390f35b34801561010357600080fd5b5061010c61021c565b604051610119919061101d565b60405180910390f35b61013c60048036038101906101379190611038565b610240565b005b34801561014a57600080fd5b50610153610bdf565b6040516101609190611086565b60405180910390f35b610171610c03565b005b34801561017f57600080fd5b5061019a600480360381019061019591906110a1565b610cdb565b6040516101a791906110ce565b60405180910390f35b3480156101bc57600080fd5b506101c5610cf3565b6040516101d2919061110a565b60405180910390f35b600060205281600052604060002081815481106101f757600080fd5b9060005260206000209060020201600091509150508060000154908060010154905082565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061029257610291611125565b5b906000526020600020906002020160010154111561045f577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1933606460026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020868154811061033b5761033a611125565b5b9060005260206000209060020201600101546103579190611183565b61036191906111f4565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085815481106103b1576103b0611125565b5b9060005260206000209060020201600101546103cd9190611225565b6040518363ffffffff1660e01b81526004016103ea929190610ecf565b600060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b5050505061045a6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250610d17565b610bdc565b60056000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106104b1576104b0611125565b5b90600052602060002090600202016001015410610682576105066040518060400160405280601381526020017f616d6f756e742073656e6420746f207573657200000000000000000000000000815250610d17565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f193360646503782dace9d96000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020868154811061059c5761059b611125565b5b9060005260206000209060020201600101546105b89190611183565b6105c291906111f4565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858154811061061257610611611125565b5b90600052602060002090600202016001015461062e9190611225565b6040518363ffffffff1660e01b815260040161064b929190610ecf565b600060405180830381600087803b15801561066557600080fd5b505af1158015610679573d6000803e3d6000fd5b50505050610bdb565b60326000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106106d4576106d3611125565b5b9060005260206000209060020201600001546106f09190611225565b42106108a8576107966040518060400160405280600181526020017f32000000000000000000000000000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061077f5761077e611125565b5b906000526020600020906002020160000154610db0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a89a13033600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460016040518463ffffffff1660e01b8152600401610833939291906112cb565b600060405180830381600087803b15801561084d57600080fd5b505af1158015610861573d6000803e3d6000fd5b505050506108a36040518060400160405280600181526020017f3200000000000000000000000000000000000000000000000000000000000000815250610d17565b610bda565b60196000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106108fa576108f9611125565b5b9060005260206000209060020201600001546109169190611225565b4210610a2b5761095a6040518060400160405280600681526020017f7969707069650000000000000000000000000000000000000000000000000000815250610d17565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a144819433600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518363ffffffff1660e01b81526004016109f4929190610ecf565b600060405180830381600087803b158015610a0e57600080fd5b505af1158015610a22573d6000803e3d6000fd5b50505050610bd9565b610acb6040518060400160405280600181526020017f32000000000000000000000000000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110610ab457610ab3611125565b5b906000526020600020906002020160000154610db0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a89a13033600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460146040518463ffffffff1660e01b8152600401610b6893929190611350565b600060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b50505050610bd86040518060400160405280600181526020017f3600000000000000000000000000000000000000000000000000000000000000815250610d17565b5b5b5b5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001341015610c47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3e9061141d565b60405180910390fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040528042815260200134815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050565b60016020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610dad81604051602401610d2b91906114bc565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e4c565b50565b610e488282604051602401610dc69291906114de565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e4c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ea082610e75565b9050919050565b610eb081610e95565b82525050565b6000819050919050565b610ec981610eb6565b82525050565b6000604082019050610ee46000830185610ea7565b610ef16020830184610ec0565b9392505050565b600080fd5b610f0681610e95565b8114610f1157600080fd5b50565b600081359050610f2381610efd565b92915050565b610f3281610eb6565b8114610f3d57600080fd5b50565b600081359050610f4f81610f29565b92915050565b60008060408385031215610f6c57610f6b610ef8565b5b6000610f7a85828601610f14565b9250506020610f8b85828601610f40565b9150509250929050565b6000604082019050610faa6000830185610ec0565b610fb76020830184610ec0565b9392505050565b6000819050919050565b6000610fe3610fde610fd984610e75565b610fbe565b610e75565b9050919050565b6000610ff582610fc8565b9050919050565b600061100782610fea565b9050919050565b61101781610ffc565b82525050565b6000602082019050611032600083018461100e565b92915050565b60006020828403121561104e5761104d610ef8565b5b600061105c84828501610f40565b91505092915050565b600061107082610fea565b9050919050565b61108081611065565b82525050565b600060208201905061109b6000830184611077565b92915050565b6000602082840312156110b7576110b6610ef8565b5b60006110c584828501610f14565b91505092915050565b60006020820190506110e36000830184610ec0565b92915050565b60006110f482610fea565b9050919050565b611104816110e9565b82525050565b600060208201905061111f60008301846110fb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061118e82610eb6565b915061119983610eb6565b92508282026111a781610eb6565b915082820484148315176111be576111bd611154565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006111ff82610eb6565b915061120a83610eb6565b92508261121a576112196111c5565b5b828204905092915050565b600061123082610eb6565b915061123b83610eb6565b925082820190508082111561125357611252611154565b5b92915050565b6000819050919050565b600061127e61127961127484611259565b610fbe565b610eb6565b9050919050565b61128e81611263565b82525050565b600082825260208201905092915050565b50565b60006112b5600083611294565b91506112c0826112a5565b600082019050919050565b60006080820190506112e06000830186610ea7565b6112ed6020830185610ec0565b6112fa6040830184611285565b818103606083015261130b816112a8565b9050949350505050565b6000819050919050565b600061133a61133561133084611315565b610fbe565b610eb6565b9050919050565b61134a8161131f565b82525050565b60006080820190506113656000830186610ea7565b6113726020830185610ec0565b61137f6040830184611341565b8181036060830152611390816112a8565b9050949350505050565b600082825260208201905092915050565b7f75736572206e65656420746f207374616b65206d6f7265207468616e2031206560008201527f7468000000000000000000000000000000000000000000000000000000000000602082015250565b600061140760228361139a565b9150611412826113ab565b604082019050919050565b60006020820190508181036000830152611436816113fa565b9050919050565b600081519050919050565b60005b8381101561146657808201518184015260208101905061144b565b60008484015250505050565b6000601f19601f8301169050919050565b600061148e8261143d565b611498818561139a565b93506114a8818560208601611448565b6114b181611472565b840191505092915050565b600060208201905081810360008301526114d68184611483565b905092915050565b600060408201905081810360008301526114f88185611483565b90506115076020830184610ec0565b939250505056fea2646970667358221220b005aee8dec09b984fd5a551904a235fbff0d242edd360a6bbf584f137e82df864736f6c63430008110033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rewardERC20: PromiseOrValue<string>,
    _rewardERC721: PromiseOrValue<string>,
    _rewardERC1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(
      _rewardERC20,
      _rewardERC721,
      _rewardERC1155,
      overrides || {}
    ) as Promise<Staking>;
  }
  override getDeployTransaction(
    _rewardERC20: PromiseOrValue<string>,
    _rewardERC721: PromiseOrValue<string>,
    _rewardERC1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardERC20,
      _rewardERC721,
      _rewardERC1155,
      overrides || {}
    );
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
