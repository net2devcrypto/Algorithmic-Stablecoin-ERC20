# Algorithmic-Stablecoin-ERC20
🤑The Official ERC20 Algoritmic Stablecoin Project Tutorial Repo - Complete repo on how to deploy your own algorithmic stablecoin and back it with a hybrid collateral reserve between other stablecoins or cryptocurrencies.

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/n2usd-logo.png" width="200" height="80">

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/stablechart.png" width="600" height="500">

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

ENTIRE PLAYLIST:
<a href="https://youtube.com/playlist?list=PLLkrq2VBYc1ZAES681GtUnZhn_OgMNSTq" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="90" height="20"></a>


<h3>Part 2 Repo</h3>

Click for video:

<a href="https://youtu.be/QM4bXGd0CcA" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part2 Folder Contents:

```shell
N2D-USDT-Fake-ERC20-Token-SmartContract.sol
N2D-WETH-Fake-ERC20-Token-SmartContract.sol
N2USD-Reserves-CollateralVault-SmartContract.sol
```

<h3>Part 3 Repo</h3>

Click for video:

<a href="https://youtu.be/wwWiUiuhc2A" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part3 Folder Contents:

Make sure you update the AggregatorV3Interface Contract to return uint256 instead of int256. Please refer to tutorial video section : 16:00

```shell
n2USD-Price-Oracle-Demo-SmartContract.sol
```

<h3>Part 4 Repo</h3>

Click for video:

<a href="https://youtu.be/vVLyiamdvII" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part4 Folder Contents:

```shell
N2USD-Algorithmic-Stablecoin-Governance-Contract-Option1.sol
N2USD-ERC20-Stablecoin-Smart-Contract.sol
```

<h3>Part 5 Repo</h3>

Click for video:

<a href="https://www.youtube.com/watch?v=r3QScnCGtgM" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Part5 Folder Contents:

```shell
N2USD-Algorithmic-Stablecoin-Governance-Contract-Option2.sol
```

<h3>Part 6 FINAL Repo</h3>

Click for video:

<a href="" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a>

Final Folder Contents:

```shell
Backend
Frontend
```

<h4>Step 1</h4>

Download the "Final" Folder, then navigate with your shell/terminal to each project folder and install:

```shell
cd final
cd backend
npm i

cd..
cd frontend
npm i
```


<h4>Step 2</h4>

In the "config.js" on both the backend and frontend, you can either use the already configured test smart contract addresses on the config or add your own contract addresses. Make sure you update the RPC address as well (if needed).

```shell
const rsvcontract = '0xba1f546071d9d7E2388d420AC1091ce58F661Efc';
const n2usdcontract = '0x480724B920B486af30610b5Ed6456B0113951F43';
const rpc = 'https://rpc.ankr.com/polygon_mumbai';
```

CTRL + S to save!

<h4>Step 3</h4>

Run the backend and await the database to store more than 12 entries before running the frontend. Verify both ethpricedb.json and n2usdpricedb.json files to confirm. 

```shell
cd final
cd backend
node backend.js
```


<h4>Step 4</h4>

Run the Frontend to live visualize the token price!

```shell
cd final
cd frontend
npm run dev
```

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/stablechart.png" width="500" height="400">
