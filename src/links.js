
const ETH = 'ETH';
const BTC = 'BTC';
const MEV = 'MEV';
const WEB3 = 'web3';
const SOLIDITY = 'solidity';

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
  // {
  //   title: '',
  //   url: '',
  //   keywords: [],
  //   description: '',
  // },
];

export default links;
