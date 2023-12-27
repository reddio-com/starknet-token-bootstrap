import {
  useAccount,
  useBalance,
  useContract,
  useContractWrite,
} from "@starknet-react/core";
import { FormEvent, useMemo, useState } from "react";
import { cairo } from "starknet";
import { truncate } from '@/lib/utils';
import erc20 from '@/lib/erc20.json';

// ERC20 token
const CONTRACT_ADDRESS =
  "0x00555927976905d77f9af1a88160b36246182291718a78dab477ea38b19c615d";

export default function TokenForm() {
  const { address } = useAccount();

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  // Convenience hook for getting
  // formatted ERC20 balance
  const { data: balance } = useBalance({
    address,
    token: CONTRACT_ADDRESS,
    // watch: true <- refresh at every block
  });

  /*   
  Creates a single instance of a contract
  You can directly call methods on this instance:  
  contract.transfer(...)
  contract.approve(...)
  or use the populateTransaction function to compile calldata 
  for a multicall
  */
  const { contract } = useContract({
    abi: erc20,
    address: CONTRACT_ADDRESS,
  });

  const calls = useMemo(() => {
    if (!amount || !to || !contract || !balance) return;

    // format the amount from a string into a Uint256
    const amountAsUint256 = cairo.uint256(
      BigInt(Number(amount) * 10 ** balance.decimals)
    );

    return contract.populateTransaction["transfer"](to, amountAsUint256);
  }, [to, amount, contract, balance]);

  // Hook returns function to trigger multicall transaction
  // and state of tx after being sent
  const { write, isPending, data } = useContractWrite({
    calls,
  });

  async function send(event: FormEvent) {
    event.preventDefault();
    write();
  }

  return (
    <div className=" my-8 px-8 py-6 bg-offblack border border-offwhite box-shadow text-center max-w-[600px] mx-auto">
      <h3 className="text-md font-bold">
        ERC20 token{" "}
        <a
          href={`https://testnet.starkscan.co/contract/${CONTRACT_ADDRESS}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className="underline"
        >
          {truncate(CONTRACT_ADDRESS)} ↗
        </a>
      </h3>
      <strong>
        Balance: {balance?.formatted} {balance?.symbol}
      </strong>
      <form onSubmit={send} className="flex flex-col gap-4 my-4">
        <input
          type="text"
          name="to"
          placeholder="Recipient"
          required
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          required
          step="any"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="btn" disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
      {isPending && <p>tx pending...</p>}
      {data && (
        <p className="whitespace-pre-wrap break-words">
          Tx: {data.transaction_hash}
        </p>
      )}
    </div>
  );
}
