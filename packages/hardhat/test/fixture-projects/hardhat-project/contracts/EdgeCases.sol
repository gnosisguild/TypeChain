// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;
pragma experimental ABIEncoderV2;

contract EdgeCases {
  // fix for: https://github.com/gnosisguild/TypeChain/issues/389
  constructor(uint256 test, bytes memory) {}
}
