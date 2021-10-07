export function nftabi () {
  // function 方法
  // event 事件
  // constructor 构造函数
  return [
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'name_',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'symbol_',
          'type': 'string'
        },
        {
          'internalType': 'uint256',
          'name': 'supply',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'decimal',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },

    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'spender',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },

    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    },
    // spender 他可以使用owner 代币数额
    {
      // true 只读，   false 需要发起交易
      'constant': true,
      'inputs': [
        // 授权者
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        // 提供者
        {
          'internalType': 'address',
          'name': 'spender',
          'type': 'address'
        }
      ],
      // 方法名称
      'name': 'allowance',
      'outputs': [
        {
          // uint 是一个没有小数点的整数
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      // view 只读
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    // 发布到区块链，谁可以用我多少 代币
    {
      'constant': false,
      // 参数
      'inputs': [
        // 授权者
        {
          'internalType': 'address',
          'name': 'spender',
          'type': 'address'
        },
        // 数额
        {
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        }
      ],
      // 调用的api方法名
      'name': 'approve',
      // 成功的结果
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    // 查看某个地址的余额
    {
      'constant': true,
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    // 返回一个精度数字 （转换精度？）
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [
        {
          'internalType': 'uint8',
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    // 减少授权的数量
    {
      'constant': false,
      'inputs': [
        // 授权者
        {
          'internalType': 'address',
          'name': 'spender',
          'type': 'address'
        },
        // 减少、减去
        {
          'internalType': 'uint256',
          'name': 'subtractedValue',
          'type': 'uint256'
        }
      ],
      'name': 'decreaseAllowance',
      // 是否成功？
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    // 增加授权数量
    {
      'constant': false,
      'inputs': [
        // 授权者
        {
          'internalType': 'address',
          'name': 'spender',
          'type': 'address'
        },
        // 增加
        {
          'internalType': 'uint256',
          'name': 'addedValue',
          'type': 'uint256'
        }
      ],
      'name': 'increaseAllowance',
      // 是否成功？
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    // name 币的名称（类型）
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    // symbol 币的标识（简称）
    {
      'constant': true,
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },

    // totalSupply 总供应量 （全部范围总 代币的数量）
    {
      'constant': true,
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    // 交易 （需要转换精度）
    {
      'constant': false,
      'inputs': [
        // recipient 接收者
        {
          'internalType': 'address',
          'name': 'recipient',
          'type': 'address'
        },
        // 交易数量 amount
        {
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'transfer',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    // 交易：我可以授权的 人的币
    {
      'constant': false,
      'inputs': [
        // sender 发送者
        {
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        },
        // recipient 接收者
        {
          'internalType': 'address',
          'name': 'recipient',
          'type': 'address'
        },
        // amount 发送数量
        {
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [
        // bool  交易状态（在一个大对象里面），需要去解析才拿拿到
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ]
}

export function nftaddress () {
  // 合约的地址
  return '0x91b01E403dc61d6190B9C8DB5e25cDc5a9d9E6F4'
}
