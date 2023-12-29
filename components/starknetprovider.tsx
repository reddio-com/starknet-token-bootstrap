import { goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  reddioProvider,
  argent,
  braavos,
  useInjectedConnectors,
} from "@starknet-react/core";


export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Sort connectors alphabetically by their id.
    order: "alphabetical",
  });

  let apiKey = process.env.NEXT_PUBLIC_REDDIO_API_KEY || "";

  return (
    // React context that provides access to
    // starknet-react hooks and shared state
    <StarknetConfig
      chains={[goerli]}
      provider={reddioProvider({apiKey})}
      connectors={connectors}
      // autoConnect={false}
    >
      {children}
    </StarknetConfig>
  );
}
