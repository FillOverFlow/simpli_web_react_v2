import { ChainId, Config , Mainnet} from "@usedapp/core";

export const MainNet : Config = {
  readOnlyChainId: ChainId.BSC,
  readOnlyUrls: {
      [ChainId.BSC]: "https://bsc-dataseed.binance.org/",
  },
  // supportedChains: [ChainId.BSC],
}

export const TestNet : Config = {
  readOnlyChainId: 97,
  readOnlyUrls: {
      97: "https://data-seed-prebsc-2-s2.binance.org:8545/",
  },
  // multicallAddresses: {
  // 97: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
  //},
  // supportedChains: [97],
}
