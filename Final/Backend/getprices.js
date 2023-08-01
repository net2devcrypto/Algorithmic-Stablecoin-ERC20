const { ethers } = require("ethers");
const oracleABI = require('./oracleabi.json');
const reserveABI = require('./reservesabi.json');
const n2usdABI = require('./n2usdabi.json');

const oracleEth = '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419';
const reservecontract = '0xba1f546071d9d7E2388d420AC1091ce58F661Efc';
const n2usdcontract = '0x480724B920B486af30610b5Ed6456B0113951F43';

const ethrpc = 'https://rpc.ankr.com/eth';
const mumrpc = 'https://rpc.ankr.com/polygon_mumbai';

const ethprovider = new ethers.providers.JsonRpcProvider(ethrpc);
const mumprovider = new ethers.providers.JsonRpcProvider(mumrpc);
const key = '89b0896f8b0fea1cec2d7dfd0204ba63e896d4b58581d299aea477dc3f2b2a35';
const walleteth = new ethers.Wallet(key, ethprovider);
const walletmum = new ethers.Wallet(key, mumprovider);

const ethoracle = new ethers.Contract(oracleEth, oracleABI, walleteth);
const reserves = new ethers.Contract(reservecontract, reserveABI, walletmum);
const n2usd = new ethers.Contract(n2usdcontract, n2usdABI, walletmum);

async function getEthPrice() {
    let ethprice = await ethoracle.latestRoundData().catch((error) => {console.log(error)})
    let lastesteth = Number((ethprice.answer).toString()) / 1e8;
    return lastesteth;
}

async function getN2usdPrice() {
    let lastesteth = await getEthPrice().catch((error) => {console.log(error)})
    let usdtcolraw = await reserves.rsvVault(0).catch((error) => {console.log(error)})
    let ethcolraw = await reserves.rsvVault(1).catch((error) => {console.log(error)})
    let n2usdSupRaw = await n2usd.totalSupply().catch((error) => {console.log(error)})
    let usdtcollateral = Number((usdtcolraw.amount).toString()) / 1e18;
    let ethcollateral = Number((ethcolraw.amount).toString()) / 1e18;
    let n2usdsupply = Number((n2usdSupRaw.toString())) / 1e18;
    let n2usdprice = ((usdtcollateral * 1) + (ethcollateral * lastesteth)) / n2usdsupply;
    return n2usdprice

}

module.exports = { getEthPrice, getN2usdPrice }








