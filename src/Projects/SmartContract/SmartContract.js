import React, { Component } from "react";
import "./style/style.css";
import web3 from "./web3";
import lottery from "./lottery";

class SmartContract extends Component {
  state = {
    manager: "",
    players: [],
    balance: "0",
    value: "",
    message: "",
    address: "",
  };

  // async componentDidMount() {
  //   // const manager = await lottery.methods.manager().call();
  //   // const players = await lottery.methods.getPlayers().call();
  //   // const balance = await web3.eth.getBalance(lottery.options.address);
  //   const balance = await web3.eth.getBalance(lottery.options.address);
  //   // const address = lottery.options.address;
  //   // this.setState({ manager, players, balance, address });
  //   this.setState({ balance });
  // }

  // var myContract;
  // var coinbase;

  // async function getInitialProps() {
  //   web3.eth.requestAccounts();

  //   //取得帳號
  //   coinbase = await web3.eth.getCoinbase();

  //   //取得帳號餘額
  //   var balance = await web3.eth.getBalance(coinbase);
  //   document.querySelector("#my_address").text(coinbase);
  //   document.querySelector("#my_balance").text(web3.utils.fromWei(balance)); //wei 轉換成 ether web3.utils.fromWei()

  //   myContract = new web3.eth.Contract(contract_abi, contract_address);

  //   //取得合約餘額
  //   var balance_contract = await web3.eth.getBalance(contract_address);
  //   document
  //     .querySelector("#total_balance")
  //     .text(web3.utils.fromWei(balance_contract)); //wei 轉換成 ether web3.utils.fromWei()

  //   //取得參與人數 should get this value from contract
  //   var investors_members = await myContract.methods.numberOfInvesters().call();
  //   document.querySelector("#join_members").text(investors_members);

  //   //取得第一位投資者地址
  //   for (var i = 0; i < investors_members; i++) {
  //     var investors = await myContract.methods.profits(i).call();
  //     var money = await myContract.methods.investors(investors).call();
  //     document
  //       .querySelector("#join_address")
  //       .text(investors + ", intvest ether: " + web3.utils.fromWei(money));
  //   }
  // }

  // //購買
  // function invest() {
  //   alert(
  //     "每次投資為0.1 ether, 投資完成後需要等待挖礦時間，挖到將自動更新頁面"
  //   );

  //   myContract.methods
  //     .invest()
  //     .send({ from: coinbase, value: "100000000000000000" })
  //     .then(function (receipt) {
  //       // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  //       location.reload();
  //     });
  // }

  // //分紅
  // function distribute() {
  //   alert("分紅過程需要等待挖礦時間，挖到將自動更新頁面");

  //   myContract.methods
  //     .distribute()
  //     .send({ from: coinbase })
  //     .then(function (receipt) {
  //       // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  //       location.reload();
  //     });
  // }

  // // 結束
  // function over() {
  //   alert("遊戲將結束");

  //   myContract.methods
  //     .over()
  //     .send({ from: coinbase })
  //     .then(function (receipt) {
  //       // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  //       location.reload();
  //     });
  // }

  // function guest() {
  //   alert(
  //     "你現在是訪客模式，需要安裝MetaMask才能參加遊戲。\n you are in guest mode, you should have installed MetaMask to join this game."
  //   );
  // }
  render() {
    return (
      <div className="smartcontract">
        <h1>天天分紅</h1>
        {/* console.log(lottery) */}
        <p>我的地址：{this.state.address}</p>
        {/* <p>
          我的餘額：<span id="my_balance"></span>
        </p>
        <hr />
        <p>
          目前合約總獎池：<span id="total_balance"></span>
        </p>
        <p>
          目前合約總參與人數：<span id="join_members"></span>
        </p>
        <p>
          目前參與者及在獎池中所投注金額(目前只顯示最後一個，因為還不清楚要怎麼建立可變的table)：
          <br />
          <span id="join_address"></span>
        </p>

        <hr />

        <button id="invest" onClick={invest}>
          投資
        </button>
        <br />
        <button id="distribute" onClick={distribute}>
          分紅
        </button>
        <br />
        <button id="over" onClick={over}>
          遊戲結束
        </button> */}
      </div>
    );
  }
}

export default SmartContract;
