const ethpricedb = require('./ethpricedb.json');
const n2usdpricedb = require('./n2usdpricedb.json');
const fs = require("fs").promises;

const readDb = async (token) => {
    if (token == 'eth') {
        const output = await fs.readFile("ethpricedb.json", function(err, data) {
            if (err) throw err;
            return Buffer.from(data);
        })
        const pricedb = JSON.parse(output);
        return pricedb;
    } else {
        const output = await fs.readFile("n2usdpricedb.json", function(err, data) {
            if (err) throw err;
            return Buffer.from(data);
        })
        const pricedb = JSON.parse(output);
        return pricedb;
    }
}

const writeDb = async (price, time, lastentry, token) => {
    let entry = {
        updateprice: price,
        timedate: time,
        entry: lastentry + 1
    }
    if (token == 'eth') {
        ethpricedb.push(entry);
        let output = await fs.writeFile("ethpricedb.json", JSON.stringify(ethpricedb), err => {
            if (err) throw err;
            return 'Done';
        })
        return output
        }
    else {
        n2usdpricedb.push(entry);
        let output = await fs.writeFile("n2usdpricedb.json", JSON.stringify(n2usdpricedb), err => {
            if (err) throw err;
            return 'Done';
        })
        return output
    }
}

module.exports = { readDb, writeDb }
