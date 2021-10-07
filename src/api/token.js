import { web3, tokenContract } from './web3'
import store from '../store'
export function getallnft () {
  let arr = []
  return new Promise((resolve, reject) => {
    tokenContract.methods.totalSupply().call(function (error, result1) {
      if (!error) {
        resolve(arr)
      } else {
        reject(error)
      }
    })
  })
}
// 交易
export function transfer (recipient, amount, accountAddr) {
  return new Promise((resolve, reject) => {
    tokenContract.methods.transfer(recipient, amount).send({ from: accountAddr }).on('receipt', function (error, res) {
      console.log('交易成功1', res.events.Transfer)
      store.dispatch('setDeal', res.events.Transfer.returnValues)
      // arr.push(res.events)
      if (!error) {
        resolve(res)
        console.log(11111, res)
      } else {
        reject(error)
      }
    }).on('error', function (error) {
      console.log(222, error)
    })
  })
}
// 查询方法  account 代币地址（账户）
export function balanceOf (account) {
  return new Promise((resolve, reject) => {
    tokenContract.methods.balanceOf(account).call(function (error, result) {
      if (!error) {
        resolve(web3.utils.fromWei(`${result}`, 'mwei'))
      } else {
        reject(error)
      }
    })
  })
}
//   币的类型
export function name () {
  return new Promise((resolve, reject) => {
    tokenContract.methods.name().call(function (error, result) {
      if (!error) {
        resolve(result)
        console.log('币名称', result)
      } else {
        reject(error)
      }
    })
  })
}
//   币的符号
export function symbol () {
  return new Promise((resolve, reject) => {
    tokenContract.methods.symbol().call(function (error, result) {
      if (!error) {
        resolve(result)
        console.log(' 币的符号', result)
      } else {
        reject(error)
      }
    })
  })
}
