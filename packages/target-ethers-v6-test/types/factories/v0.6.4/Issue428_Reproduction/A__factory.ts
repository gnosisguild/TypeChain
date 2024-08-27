/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { A, AInterface } from "../../../v0.6.4/Issue428_Reproduction/A";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelist",
        type: "address[]",
      },
    ],
    name: "Committed",
    type: "event",
  },
] as const;

export class A__factory {
  static readonly abi = _abi;
  static createInterface(): AInterface {
    return new Interface(_abi) as AInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): A {
    return new Contract(address, _abi, runner) as unknown as A;
  }
}