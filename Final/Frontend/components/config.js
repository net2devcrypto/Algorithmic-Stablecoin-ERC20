import { ethers } from "ethers";
import rsvABI from './rsvabi.json';
import n2usdABI from './n2usdabi.json';

const rsvcontract = '0xba1f546071d9d7E2388d420AC1091ce58F661Efc';
const n2usdcontract = '0x480724B920B486af30610b5Ed6456B0113951F43';
const rpc = 'https://rpc.ankr.com/polygon_mumbai';
const provider = new ethers.providers.JsonRpcProvider(rpc);
const key = '89b0896f8b0fea1cec2d7dfd0204ba63e896d4b58581d299aea477dc3f2b2a35';
const wallet = new ethers.Wallet(key, provider);
const reserves = new ethers.Contract(rsvcontract, rsvABI, wallet);
const n2usd = new ethers.Contract(n2usdcontract, n2usdABI, wallet);



export async function getReserves() {
    const rsvcount = Number((await reserves.reserveLength()).toString());
    const n2dusdformat = (await n2usd.totalSupply()).toString();
    const n2dusdsupply = ethers.utils.formatEther(n2dusdformat)
    let i = 0;
    let rsvamounts = [];
    for (i; i < rsvcount; i++){
        const balance = await reserves.rsvVault(i);
        const getbalance = balance.amount.toString();
        let formatbalance = ethers.utils.formatEther(getbalance)
        rsvamounts.push(formatbalance);
    }
    return { rsvamounts, n2dusdsupply };
}