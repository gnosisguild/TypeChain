/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface NameClashesInterface extends utils.Interface {
  functions: {
    "attach()": FunctionFragment;
    "connect()": FunctionFragment;
    "deployed()": FunctionFragment;
    "filters()": FunctionFragment;
    "getAddress()": FunctionFragment;
    "getDeployedCode()": FunctionFragment;
    "getFunction()": FunctionFragment;
    "listeners()": FunctionFragment;
    "off()": FunctionFragment;
    "on()": FunctionFragment;
    "once()": FunctionFragment;
    "provider()": FunctionFragment;
    "runner()": FunctionFragment;
    "signer()": FunctionFragment;
    "target()": FunctionFragment;
    "then()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "attach"
      | "connect"
      | "deployed"
      | "filters"
      | "getAddress"
      | "getDeployedCode"
      | "getFunction"
      | "listeners"
      | "off"
      | "on"
      | "once"
      | "provider"
      | "runner"
      | "signer"
      | "target"
      | "then"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "attach", values?: undefined): string;
  encodeFunctionData(functionFragment: "connect", values?: undefined): string;
  encodeFunctionData(functionFragment: "deployed", values?: undefined): string;
  encodeFunctionData(functionFragment: "filters", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFunction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "listeners", values?: undefined): string;
  encodeFunctionData(functionFragment: "off", values?: undefined): string;
  encodeFunctionData(functionFragment: "on", values?: undefined): string;
  encodeFunctionData(functionFragment: "once", values?: undefined): string;
  encodeFunctionData(functionFragment: "provider", values?: undefined): string;
  encodeFunctionData(functionFragment: "runner", values?: undefined): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(functionFragment: "target", values?: undefined): string;
  encodeFunctionData(functionFragment: "then", values?: undefined): string;

  decodeFunctionResult(functionFragment: "attach", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "connect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "filters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listeners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "off", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "on", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "once", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "provider", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "runner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "then", data: BytesLike): Result;

  events: {};
}

export interface NameClashes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NameClashesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    attach(overrides?: CallOverrides): Promise<[string]>;

    connect(overrides?: CallOverrides): Promise<[string]>;

    deployed(overrides?: CallOverrides): Promise<[string]>;

    filters(overrides?: CallOverrides): Promise<[string]>;

    getAddress(overrides?: CallOverrides): Promise<[string]>;

    getDeployedCode(overrides?: CallOverrides): Promise<[string]>;

    getFunction(overrides?: CallOverrides): Promise<[string]>;

    listeners(overrides?: CallOverrides): Promise<[string]>;

    off(overrides?: CallOverrides): Promise<[string]>;

    on(overrides?: CallOverrides): Promise<[string]>;

    once(overrides?: CallOverrides): Promise<[string]>;

    provider(overrides?: CallOverrides): Promise<[string]>;

    runner(overrides?: CallOverrides): Promise<[string]>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    target(overrides?: CallOverrides): Promise<[string]>;

    then(overrides?: CallOverrides): Promise<[string]>;
  };

  getAddress(overrides?: CallOverrides): Promise<string>;

  getDeployedCode(overrides?: CallOverrides): Promise<string>;

  getFunction(overrides?: CallOverrides): Promise<string>;

  runner(overrides?: CallOverrides): Promise<string>;

  target(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    attach(overrides?: CallOverrides): Promise<string>;

    connect(overrides?: CallOverrides): Promise<string>;

    deployed(overrides?: CallOverrides): Promise<string>;

    filters(overrides?: CallOverrides): Promise<string>;

    getAddress(overrides?: CallOverrides): Promise<string>;

    getDeployedCode(overrides?: CallOverrides): Promise<string>;

    getFunction(overrides?: CallOverrides): Promise<string>;

    listeners(overrides?: CallOverrides): Promise<string>;

    off(overrides?: CallOverrides): Promise<string>;

    on(overrides?: CallOverrides): Promise<string>;

    once(overrides?: CallOverrides): Promise<string>;

    provider(overrides?: CallOverrides): Promise<string>;

    runner(overrides?: CallOverrides): Promise<string>;

    signer(overrides?: CallOverrides): Promise<string>;

    target(overrides?: CallOverrides): Promise<string>;

    then(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    attach(overrides?: CallOverrides): Promise<BigNumber>;

    connect(overrides?: CallOverrides): Promise<BigNumber>;

    deployed(overrides?: CallOverrides): Promise<BigNumber>;

    filters(overrides?: CallOverrides): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getDeployedCode(overrides?: CallOverrides): Promise<BigNumber>;

    getFunction(overrides?: CallOverrides): Promise<BigNumber>;

    listeners(overrides?: CallOverrides): Promise<BigNumber>;

    off(overrides?: CallOverrides): Promise<BigNumber>;

    on(overrides?: CallOverrides): Promise<BigNumber>;

    once(overrides?: CallOverrides): Promise<BigNumber>;

    provider(overrides?: CallOverrides): Promise<BigNumber>;

    runner(overrides?: CallOverrides): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    target(overrides?: CallOverrides): Promise<BigNumber>;

    then(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    attach(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    connect(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeployedCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listeners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    off(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    on(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    once(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    runner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    target(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    then(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
