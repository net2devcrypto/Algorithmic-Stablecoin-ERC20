const express = require('express');
const app = express();
const cors= require("cors");
const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions))
app.use(require('body-parser').json());

const n2dlogo = `
███╗   ██╗██████╗ ██████╗ ███████╗██╗  ██╗
████╗  ██║╚════██╗██╔══██╗██╔════╝╚██╗██╔╝
██╔██╗ ██║ █████╔╝██║  ██║█████╗   ╚███╔╝ 
██║╚██╗██║██╔═══╝ ██║  ██║██╔══╝   ██╔██╗ 
██║ ╚████║███████╗██████╔╝███████╗██╔╝ ██╗
╚═╝  ╚═══╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
`

const { getDbData, storeEthPrice, storeN2usdPrice } = require('./interface');

app.post("/getchartinfo", function (req, res) {
    const token = req.body.token;
    return new Promise((resolve, reject) => {
      getDbData(token).then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(response));
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(405).end();
    });
});
});

const refreshEthPrice = async () => {
    setInterval(function () {
        storeEthPrice();
    }, 120000)
}

const refreshN2usdPrice = async () => {
    setInterval(function () {
        storeN2usdPrice();
    }, 120000)
}

const server = app.listen(8082, function() {
    const port = server.address().port;
    console.log('')
    console.log(n2dlogo);
    console.log('')
    refreshEthPrice()
    refreshN2usdPrice()
    console.log('Backend API Listening on Port: ' + port)
})





