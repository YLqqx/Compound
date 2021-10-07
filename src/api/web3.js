import Web3 from 'web3'
import store from '../store'
import {nftabi, nftaddress} from './nft'
var web3
let tokenContract
function initWeb3 () {
  if (window.ethereum) {
    // console.log('用户 1')
    web3 = new Web3(window.ethereum)
    // 请求用户授权
    window.ethereum.enable().then(function (accounts) {
      // console.log('accounts1111',accounts);
      window.accountAddress = accounts[0]
      web3.eth.defaultAccount = accounts[0]
      store.dispatch('setAccountAddr', accounts[0])
      localStorage.setItem('setAccountAddr', accounts[0])
    }).catch(err => { console.log('err', err) })
  } else if (typeof web3 !== 'undefined') {
    // console.log('用户 2',web3)
    web3 = new Web3(web3.currentProvider)
    web3.eth.getAccounts(function (error, res) {
      if (!error) {
        store.dispatch('setAccountAddr', res[0])
        web3.eth.defaultAccount = res[0]
        window.accountAddress = res[0]
      }
    })
  } else {
    console.log('本地?')
    web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'))
  }
  // 实例化web3
  if (web3) {
    tokenContract = new web3.eth.Contract(nftabi(), nftaddress())
  }
  // wbnb = new web3.eth.Contract(wbnbabi(), wbnbaddr())
  tokenContract.events.Transfer(function (error, event) { console.log('000', event); console.log(error) })
    .on('data', function ({returnValues}) {
      console.log('111', returnValues)
      store.dispatch('setMonitorDeal', returnValues)
    })
    .on('changed', function (event) {
      console.log('222', event)
    })
    .on('error', console.error)
  return web3
}
web3 = initWeb3()
// 导出相应的方法
export {
  web3,
  initWeb3,
  // 实例
  tokenContract,
  nftaddress
}
