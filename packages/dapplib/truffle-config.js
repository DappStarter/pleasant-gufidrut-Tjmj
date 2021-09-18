require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain upgrade grid enroll broken twenty'; 
let testAccounts = [
"0xb6fd33f3799a02e25f581d03950ac9c1e632319cf3aae0bfae2b4c69a56aec57",
"0x623958922ed90bd3fa25d2630dc7145e1ccb50edadd2bcb284a1da29c06a71d3",
"0xe1eb6c4f2272f22ac4de8a6c2bd0bcc669e987b138ec2d115f7ccc6b6d0f3d7d",
"0x5375aede19b0bee072b6be61a12213981741c5cb28c06c7e4ee03cab92fef070",
"0xe8eb2db1acb60951a510edf042b0a33487a9e2bf5520e0151b6cfbb64eaec6cd",
"0x201361e8a7662b736d9176213710e685aab1a6fefbd9fb52e23c03e00094eb77",
"0xada46809d4115a339f7c6c441de9c47be6ff39f78c9819a0615cb1be1fdefb82",
"0x4b2e97c482ae4ab261d7b3ca5d02d8062692cee0f8d28ea9bf798282eaae058b",
"0xfdfa70e52781ea24edf972a36a8c5be9493c7e7fd5e398869e68534f4c0950e9",
"0x640c878d43e2667a061e75187b1451c10a5cf9c3f75c9abf4519ead6b28e9197"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

