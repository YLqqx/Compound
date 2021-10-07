<template>
  <div>
    <div class="personal_meg">
      <div class="hint">Note You currently connected to the {{ hint }}</div>
      <div class="choice_model">
        <div class="cpd">
          <div>小图标ii</div>
          <div>Compound</div>
        </div>
        <div class="pattern">
          <div class="dashboard active">Dashboard</div>
          <div class="vote">Vote</div>
        </div>
        <div class="account">
          <div class="surplus_sum">{{ surplus }}<span>小图标</span></div>
          <div class="site">{{ accountAddr }}</div>
        </div>
      </div>
      <div class="content">
        <div class="content_left">
          <div class="left_title">Supply Balance</div>
          <div class="left_Info">$6,441.35268832</div>
        </div>
        <div class="content_middle">
          <div class="middle_title">Net APY</div>
          <div class="middle_Info">2.83%</div>
        </div>
        <div class="content_right">
          <div class="right_title">Borrow Balance</div>
          <div class="right_Info">$0.00000000</div>
        </div>
      </div>
      <div class="progress_1">
        <div class="progress_title">Borrow Limit</div>
        <div class="progress_count">
          <van-progress  inactive :percentage="50" />
        </div>

        <!-- <div>111111111111111111111111</div> -->
        <!-- <van-button type="primary">主要按钮</van-button> -->
        <!-- <van-progress inactive :percentage="50" /> -->
        <!-- <van-progress class="progress_count" inactive :percentage="100" color='#637786'></van-progress> -->
        <div class="progress_num">$4.830.93</div>
      </div>
    </div>
    <van-progress inactive :percentage="50" color='#070a0e' />
  </div>
</template>

<script>
// 引入vuex
// import { mapGetters } from "vuex";
export default {
  data () {
    return {
      hint: 'Ropsten Testnet', // 网络模式提示
      surplus: '余额余额', // 余额
      site: '账户地址' // 账户地址
    }
  },
  // 计算属性
  computed: {
    // ...mapGetters(["accountAddr"])
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
.personal_meg {
  height: 500px;
  background-color: #070a0e;
  .hint {
    color: #fff;
    background-color: cadetblue;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .choice_model {
    // background-color: olivedrab;
    color: #fff;
    padding: 0 315px;
    display: flex;
    justify-content: space-between;
    .cpd {
      display: flex;
    }
    .pattern {
      display: flex;
      color: #fff;
      .dashboard {
        margin-right: 20px;
        padding: 5px;
        color: #00d395;
        border-bottom: 1px solid #00d395;
      }
      .vote {
        padding: 5px;
      }
      .active {
        color: #00d395;
        border-bottom: 1px solid #00d395;
      }
    }
    .account {
      display: flex;
      .surplus_sum {
        margin-right: 20px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.1);
      }
      .site {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  .content {
    width: 960px;
    padding: 40px 0;
    margin: 0 auto;
    //   background-color: olivedrab;
    display: flex;
    .content_left {
      padding: 40px 95px;
      background-color: olivedrab;
      .left_title {
        color: #00d395;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      .left_Info {
        color: #fff;
        font-size: 22px;
        display: flex;
        justify-content: center;
      }
    }
    .content_middle {
      height: 134px;
      width: 134px;
      border-radius: 50%;
      border: 3px solid #00d395;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .middle_title {
        color: #657786;
        font-size: 12px;
      }
      .middle_Info {
        color: #fff;
        font-size: 22px;
      }
    }
    .content_right {
      padding: 40px 95px;
      background-color: olivedrab;
      .right_title {
        color: #6863ed;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      .right_Info {
        color: #fff;
        font-size: 22px;
        display: flex;
        justify-content: center;
      }
    }
  }
  .progress_1 {
    width: 960px;
    margin: 0 auto;
    //   background-color: orangered;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .progress_title {
      color: #657786;
    }
    .progress_count {
      flex: 1;
      padding: 0 10px;
    }
    .progress_num {
      color: #657786;
    }
  }
}
</style>
