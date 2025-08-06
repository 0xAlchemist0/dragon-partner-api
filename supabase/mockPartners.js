export const mockPartners = [
  {
    id: 1,
    name: "LayerZero",
    symbol: "ZRO",
    logo: "https://cryptologos.cc/logos/layerzero-labs-zro-logo.png?v=032",
    chains: [
      { name: "Ethereum", chainId: 1 },
      { name: "Arbitrum", chainId: 42161 },
      { name: "Polygon", chainId: 137 },
      { name: "Base", chainId: 8453 },
      { name: "BNB Chain", chainId: 56 },
    ],
    url: "https://layerzero.network",
  },
  {
    id: 2,
    name: "Velodrome",
    symbol: "VELO",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940/logo.png",
    chains: [{ name: "Optimism", chainId: 10 }],
    url: "https://velodrome.finance",
  },
  {
    id: 3,
    name: "Radiant Capital",
    symbol: "RDNT",
    logo: "https://cryptologos.cc/logos/radiant-capital-rdnt-logo.png?v=032",
    chains: [
      { name: "Arbitrum", chainId: 42161 },
      { name: "BNB Chain", chainId: 56 },
    ],
    url: "https://radiant.capital",
  },
  {
    id: 4,
    name: "Sonic",
    symbol: "SONIC",
    logo: "https://i.imgur.com/oKMzZsD.png", // Replace with your actual logo URL
    chains: [
      { name: "Sonic", chainId: 100_000 }, // Replace with correct if needed
    ],
    url: "https://sonic.fyi",
  },
];
