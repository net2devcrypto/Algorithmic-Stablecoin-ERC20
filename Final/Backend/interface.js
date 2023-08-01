const { getEthPrice, getN2usdPrice } = require('./getprices');
const { readDb, writeDb } = require('./database');

const getDbData = async (token) => {
    let fromoutput = await readDb(token).catch((error) => {console.log(error)})
    let chartprice = [];
    let charttime = [];
    let chartentry = [];
    if (fromoutput != undefined) {
        fromoutput.forEach((value) => {
            chartprice.push(value.updateprice)
            charttime.push(value.timedate)
            chartentry.push(value.entry);
        })
    }
    return { chartprice, charttime, chartentry }
}


const storeEthPrice = async () => {
    const token = 'eth';
    let price = await getEthPrice();
    const fetchtime = new Date();
    const time =                          
        fetchtime.getHours() +
        ":" + 
        fetchtime.getMinutes() +
        ":" +
        fetchtime.getSeconds();
    const fetchlast = await getDbData(token);
    let rawlastentry = fetchlast.chartentry;
    if (rawlastentry.length == 0) {
        let entry = 0;
        await writeDb(price, time, entry, token).catch((error) => {console.log(error)})
    }
    else if(rawlastentry.length > 0) {
        let lastentry = rawlastentry[rawlastentry.length - 1];
        await writeDb(price, time, lastentry, token).catch((error) => {console.log(error)})
    }
}

const storeN2usdPrice = async () => {
    const token = 'n2usd';
    let price = await getN2usdPrice();
    const fetchtime = new Date();
    const time =                          
        fetchtime.getHours() +
        ":" + 
        fetchtime.getMinutes() +
        ":" +
        fetchtime.getSeconds();
    const fetchlast = await getDbData(token);
    let rawlastentry = fetchlast.chartentry;
    if (rawlastentry.length == 0) {
        let entry = 0;
        await writeDb(price, time, entry, token).catch((error) => {console.log(error)})
    }
    else if(rawlastentry.length > 0) {
        let lastentry = rawlastentry[rawlastentry.length - 1];
        await writeDb(price, time, lastentry, token).catch((error) => {console.log(error)})
    }
}

module.exports = { getDbData, storeEthPrice, storeN2usdPrice }