
// misc:
const MEV = 'MEV';
const WEB3 = 'web3';
const SOLIDITY = 'solidity';
const SATOSHI = 'satoshi';
const CHARTS = 'charts';
const ORDERBOOK = 'orderbook';
const BLOCKCHAIN = 'blockchain';
const BLOCK_EXPLORER = 'block explorer';
const MEMPOOL = 'mempool';
const WALLET = 'wallet';
const MNEMONIC = 'mnemonic';
const SEED = 'seed';
const PRIVKEY = 'privkey';
const MULTISIG = 'multisig';
const OSS = 'OSS';
const FORK = 'FORK';
const DEFI = 'DeFi';
const LINKS = 'links';
const DAO = 'DAO';
const BURN = 'burn';
const LN = 'LN';
const SERVICE = 'service';
const FEES = 'fees';

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

// BIP codes generator:
const BIP = n => `BIP ${n}`;

const links = [
  {
    title: 'Wen merge',
    url: 'https://wenmerge.com',
    keywords: [ETH, FORK],
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
    keywords: [ETH, MEV, 'supply', BURN],
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
    title: 'Combined Orderbook ',
    url: 'https://coinlobster.com',
    keywords: [BTC, ORDERBOOK],
    description: '',
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
  {
    title: 'Bitcoin Obituaries',
    url: 'https://99bitcoins.com/bitcoin-obituaries',
    keywords: [BTC, NEWS, 'obituaries'],
    description: 'How many times Bitcoin has died',
  },
  {
    title: 'Wallet Scrutiny',
    url: 'https://walletscrutiny.com',
    keywords: [BTC, ETH, WALLET, 'scrutiny'],
    description: 'The aim of this project is to improve the security of Bitcoin wallets by examining products for transparency and potential attacks',
  },
  {
    title: 'Mnemonic Code Converter',
    url: 'https://iancoleman.io/bip39',
    keywords: [BTC, TOOL, MNEMONIC, SEED, OSS, BIP(39), BIP(32), BIP(44), BIP(49), BIP(84), BIP(85), BIP(141)],
    description: '',
  },
  {
    title: 'MyCrypto',
    url: 'https://mycrypto.com',
    keywords: [ETH, TOOL, WALLET, OSS, PRIVKEY],
    description: '',
  },
  {
    title: 'Coinb.in',
    url: 'https://coinb.in',
    keywords: [BTC, TOOL, WALLET, MULTISIG, OSS, PRIVKEY],
    description: '',
  },
  {
    title: 'CoinGecko',
    url: 'https://coingecko.com',
    keywords: [BTC, ETH, BLOCKCHAIN, LINKS],
    description: '',
  },
  {
    title: 'Vanity ETH Address Generator',
    url: 'https://gkucmierz.github.io/vanity-eth',
    keywords: [ETH, TOOL, WALLET, PRIVKEY, OSS, 'vanity address'],
    description: '',
  },
  {
    title: 'L2BEAT',
    url: 'https://l2beat.com',
    keywords: [ETH, DEFI, CHARTS, LINKS, 'L2', 'scaling'],
    description: 'Analytics and research website about Ethereum layer two (L2) scaling',
  },
  {
    title: 'kycnot.me',
    url: 'https://kycnot.me',
    keywords: [BTC, 'ETH', 'KYC', LINKS],
    description: 'NON-KYC exchanges and services to use and spend your crypto anonymously',
  },
  {
    title: 'Bitcoin Only',
    url: 'https://bitcoin-only.com',
    keywords: [BTC, LINKS, 'education'],
    description: 'Collection of the highest quality Bitcoin resources',
  },
  {
    title: 'OpenOrgs.info',
    url: 'https://openorgs.info',
    keywords: [ETH, LINKS, DAO],
    description: 'DAOs as new companies and their balance sheets',
  },
  {
    title: 'Money Movers',
    url: 'https://money-movers.info',
    keywords: [BTC, ETH, CHARTS],
    description: '',
  },
  {
    title: 'Ethereum Nodes',
    url: 'https://ethereumnodes.com',
    keywords: [ETH, LINKS],
    description: '',
  },
  {
    title: 'Crypto Fees',
    url: 'https://cryptofees.info',
    keywords: [ETH, LINKS, FEES],
    description: '',
  },
  {
    title: 'ETH Burned',
    url: 'https://ethburned.info',
    keywords: [ETH, CHARTS, BURN],
    description: '',
  },
  {
    title: 'CoinDebit',
    url: 'https://coindebit.io',
    keywords: [BTC, LN, SERVICE, 'card', 'VISA'],
    description: 'Create virtual debit card using Lightning Network',
  },
  {
    title: 'Offline Cash',
    url: 'https://offline.cash',
    keywords: [BTC, SERVICE, WALLET, SATOSHI, PRIVKEY, 'cash'],
    description: 'Bitcoin that\'s easy to save, spend and hold in a self-sovereign way',
  },
  {
    title: 'Lightning Network Proxy',
    url: 'https://lnproxy.org',
    keywords: [BTC, LN, SERVICE, 'proxy'],
    description: '',
  },
  {
    title: 'Bitcoin Visuals',
    url: 'https://bitcoinvisuals.com',
    keywords: [BTC, LN, LINKS, CHARTS, FEES, 'stats'],
    description: '',
  },
  {
    title: 'The Halvening',
    url: 'https://thehalvening.com',
    keywords: [BTC, VISUALIZATION, 'halving'],
    description: '',
  },
  // {
  //   title: '',
  //   url: '',
  //   keywords: [],
  //   description: '',
  // },
].reverse();

export default links;
