var http = require("http");
const Web3 = require("web3");
const console = require("console");

const RPC_ENDPOINT = "https://eth-rpc.gateway.pokt.network";

const web3 = new Web3(RPC_ENDPOINT);

// let subscription = web3.eth.subscribe(
//   "newBlockHeaders",

//   function (err, result) {
//     console.log("subscribe", result ? result.number : "");
//   }
// );
// console.log("subscription", subscription);

// working--------------------
// web3.eth.getBlockNumber().then(async (block) => {
//   console.log("blockXYZZ", block);
//   const txCount = await web3.eth.getBlockTransactionCount(block);

//   console.log("blockNumber", txCount);
//   await web3.eth
//     .getBlock(txCount)
//     .then((blockResults) => console.log("blockResults", blockResults));

// });

// Working-------------------
web3.eth
  .getBlock("latest")
  .then(console.log);


// working code---------------
const transactionHash =
  "0x6d365aa4dda50738ae9b63d0ec634d9163c814a1f257b88ed383bd3dae33bbb2";
web3.eth.getTransaction(transactionHash, function (error, result) {
  console.log("transactioSSSSS", result);
});

http
  .createServer(function (req, res) {
    //write a response to the client
    res.write("<h1>subscription</h1>");
    //end the response
    res.end();
  })
  .listen(8080);
//Server runs on localhost:8080

// console.info(subscription);
