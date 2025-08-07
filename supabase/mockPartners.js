export const mockPartners = [
  {
    name: "LayerZero",
    symbol: "ZRO",
    logo: "https://images.prismic.io/uphold/ZntSD5bWFbowe2vI_ZRO%402x.png?auto=format,compress?auto=compress,format",
    chains: [
      { name: "Ethereum", chainId: 1 },
      { name: "Arbitrum", chainId: 42161 },
      { name: "Polygon", chainId: 137 },
      { name: "Base", chainId: 8453 },
      { name: "BNB Chain", chainId: 56 },
    ],
    url: "https://layerzero.network",
    is_active: true,
  },
  {
    name: "Velodrome",
    symbol: "VELO",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/20435.png",
    chains: [{ name: "Base", chainId: 8453 }],
    url: "https://velodrome.finance",
    is_active: true,
  },
  {
    name: "Radiant Capital",
    symbol: "RDNT",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/21106.png",
    chains: [
      { name: "Arbitrum", chainId: 42161 },
      { name: "BNB Chain", chainId: 56 },
    ],
    url: "https://radiant.capital",
    is_active: true,
  },
  {
    name: "Sonic",
    symbol: "SONIC",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png", // Replace with your actual logo URL
    chains: [
      { name: "Sonic", chainId: 110 }, // Replace with correct if needed
    ],
    url: "https://sonic.fyi",
    is_active: true,
  },
];
