/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  Addressable,
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface NameClashesInterface extends Interface {
  getFunction(
    nameOrSignature:
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
}

export interface NameClashes extends BaseContract {
  connect(runner?: ContractRunner | null): NameClashes;
  attach(target: string | Addressable): NameClashes;
  waitForDeployment(): Promise<this>;

  interface: NameClashesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deployed: TypedContractMethod<[], [string], "view">;

  provider: TypedContractMethod<[], [string], "view">;

  signer: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "attach"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "connect"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deployed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "filters"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getDeployedCode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getFunction"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "listeners"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "off"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "on"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "once"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "provider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "runner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "signer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "target"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "then"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
