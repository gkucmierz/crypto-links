
const MEV = 'MEV';
const WEB3 = 'web3';
const SOLIDITY = 'solidity';
const SATOSHI = 'satoshi';
const CHARTS = 'charts';
const ORDERBOOK = 'orderbook';
const BLOCKCHAIN = 'blockchain';
const BLOCK_EXPLORER = 'block explorer';
const MEMPOOL = 'mempool';

// categories:
const TOOL = 'tool';
const NEWS = 'news';
const VISUALIZATION = 'visualization';

// cc codes:
const PL = 'PL';

// currencies:
const ETH = 'ETH';
const BTC = 'BTC';
const PLN = 'PLN';

const BIP = n => `BIP ${n}`;

const links = [
  {
    title: 'Wen merge',
    url: 'https://wenmerge.com',
    keywords: [ETH],
    description: '',
  },
  {
    title: 'When taproot',
    url: 'https://whentaproot.org',
    keywords: [BTC, 'taproot', 'Bech32', 'P2TR', BIP(173)],
    description: '',
  },
  {
    title: 'MEV Watch',
    url: 'https://mevwatch.info',
    keywords: [ETH, 'OFAC', 'MEV'],
    description: '',
  },
  {
    title: 'Use web3',
    url: 'https://useweb3.xyz',
    keywords: [ETH, WEB3, SOLIDITY, 'courses'],
    description: '',
  },
  {
    title: 'ultra sound money',
    url: 'https://ultrasound.money',
    keywords: [ETH, MEV, 'supply', 'burn'],
    description: '',
  },
  {
    title: 'Chainlist',
    url: 'https://chainlist.org',
    keywords: [TOOL, ETH, WEB3, 'EVM', 'RPC', 'chain'],
    description: '',
  },
  {
    title: 'pln sat',
    url: 'https://plnsat.com',
    keywords: [PL, BTC, PLN, SATOSHI],
    description: 'Ile satoshi jest warta 1 złotówka',
  },
  {
    title: 'satoshis per person',
    url: 'https://satoshisperperson.com',
    keywords: [BTC, SATOSHI],
    description: 'How many satoshis are there per person in the world',
  },
  {
    title: 'look into bitcoin',
    url: 'https://lookintobitcoin.com',
    keywords: [BTC, CHARTS, 'indicator'],
    description: 'Making Bitcoin data accessible to everyone',
  },
  {
    title: 'coinlobster',
    url: 'https://coinlobster.com',
    keywords: [BTC, ORDERBOOK],
    description: 'Combined Orderbook',
  },
  {
    title: 'Bitcoin Legality Map',
    url: 'https://bitrawr.com/terminal/legality-map',
    keywords: [BTC, 'legal', 'illegal', 'alegal', 'legal tender'],
    description: '',
  },
  {
    title: 'rekt',
    url: 'https://rekt.news',
    keywords: [BTC, NEWS, 'rekt', 'hack'],
    description: '',
  },
  {
    title: 'sha256 algorithm',
    url: 'https://sha256algorithm.com',
    keywords: [BTC, TOOL, 'sha256'],
    description: '',
  },
  {
    title: 'Mampool space',
    url: 'https://mempool.space',
    keywords: [BTC, BLOCKCHAIN, BLOCK_EXPLORER, MEMPOOL],
    description: '',
  },
  {
    title: 'BitListen',
    url: 'https://bitlisten.com',
    keywords: [BTC, MEMPOOL, VISUALIZATION],
    description: '',
  },
  {
    title: 'BitBonkers',
    url: 'https://bitbonkers.netlify.app',
    keywords: [BTC, MEMPOOL, VISUALIZATION],
    description: '',
  },
  {
    title: 'Etherscan',
    url: 'https://etherscan.io',
    keywords: [ETH, BLOCKCHAIN, BLOCK_EXPLORER],
    description: 'The Ethereum Blockchain Explorer',
  },
  {
    title: 'BeaconScan',
    url: 'https://beaconscan.com',
    keywords: [ETH, BLOCKCHAIN, BLOCK_EXPLORER, 'ETH2'],
    description: 'The Official Etherscan Beacon Chain Ethereum 2.0 Explorer',
  },
  // {
  //   title: '',
  //   url: '',
  //   keywords: [],
  //   description: '',
  // },
];

export default links;
