require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name random noise history hockey kangaroo army gather'; 
let testAccounts = [
"0xbd91c52f68b973bf96cd2966f4bc39c6888cc8802b8ce62a29e2758a0652a05e",
"0xe460e673b3fa0f2b6c0e3acdcad790cdbfc6e0e309db55e56dff6d7c8ff0f15c",
"0x12ea2511b16c63f48a06f1d538771818a019bbb7ebb8b9ec0d064bcbc1bf489b",
"0x94cb20077713e82cde20dab5fe5c40f06fe13a6634ed69d37728d17f72ea5c28",
"0xdb276cc6825edffdb534d5b431b31d871c37c6d66bfdd42adbabbebab9a9d8d3",
"0xf180e3a902764e44fdbb1631eb2d19db2484a802acab9cc968f00f57436b0aef",
"0x3fdc19c335562b3760942bb43090dbfae22f472a69acb1308e67e747d0b71ec1",
"0x2f793cb6056b1173333754b176a57fbf6bf783967b6051f6ab3168e094a425e8",
"0x9aa2587d0b23caef6d3d999a466a375ae20124afd6281d2a3b9b2924b6c78972",
"0x2214f3af44cee0fa9c480c7900f25eeaaf02fcfebc813397f1b8d34179cd734b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

