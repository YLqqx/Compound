<template>
  <div class="home">
    <!-- 个人信息 -->
    <div class="personal_meg">
      <div class="hint">Note: You currently connected to the {{ hint }}</div>
      <div class="surplus">
        <div class="surplus_cpd">小图标iiCompound</div>
        <div class="surplus_sum">{{ surplus }} 小图标ii</div>
      </div>
      <div class="content">
        <div class="content_left">
          <div class="left_title">Net APY</div>
          <div class="left_Info">2.83%</div>
        </div>
        <div class="content_right">
          <div class="Collateral">
            <div class="Collateral_title">Collateral Balance</div>
            <div class="hypothecate_num">$6.442.70431 01 6</div>
          </div>
          <div class="borrow">
            <div class="borrow_title">Borrow Balance</div>
            <div class="borrow_num">$0.00000000</div>
          </div>
        </div>
      </div>
      <div class="progress_1">
        <div class="progress_title">Borrow Limit</div>
        <div class="progress_count">
          <span class="percentage_num">50%</span>
          <van-progress
            class="percentage_module"
            :percentage="50"
            :show-pivot="false"
            color="#607280"
            track-color="#1e2429"
          />
        </div>
        <div class="progress_num">$4.830.93</div>
      </div>
    </div>
    <!-- 数据信息 -->
    <div class="below">
      <div class="dataMsg">
        <div class="Supply">
          <div class="Supply_title">Supply</div>
          <div class="Supply_head">
            <div class="Asset">Asset</div>
            <div class="Supply_right">
              <div class="Balance">Balance</div>
              <div class="Collateral">Collateral</div>
            </div>
          </div>
          <div class="Supply_content">
            <div class="content_Info">
                <div class="Info_img"><img src="@/assets/img/01.png" alt=""></div>
                <div class="Info_name">
                    <div class="userName">Basic Atten...</div>
                    <div class="variety">37.06%</div>
                </div>
            </div>
            <div class="content_right">
              <div class="content_data">
                  <div class="money">$0.08</div>
                  <div class="data_currency">0.1064 BAT</div>
              </div>
              <div class="content_btn">
                  <van-switch v-model="checked" active-color="#00d395" inactive-color="#bfc8cd" size="16px" />
              </div>
            </div>
          </div>
        </div>
        <div class="Borrow2">Borrow Markets</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vuex
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      hint: 'Ropsten Testnet', // 网络模式提示
      checked: true // 按钮开关
    }
  },
  // 计算属性
  computed: {
    // accountAddr 账户地址 surplus 余额
    ...mapGetters(['accountAddr', 'surplus'])
  }
}
</script>

<style lang='less' scoped>
.home {
  .personal_meg {
    height: 400px;
    background-color: #070a0e;
    padding: 0 15px;
    .hint {
      color: #fff;
      height: 50px;
      width: 320px;
      margin: 0 auto;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .surplus {
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 20px 0px 40px 0px;
      .surplus_cpd {
        font-size: 16px;
      }
      .surplus_sum {
        padding: 7px;
        font-size: 12px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }
    }
    .content {
      display: flex;
      .content_left {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 3px solid #00d395;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 30px 0 15px;
        .left_title {
          color: #657786;
          font-size: 12px;
        }
        .left_Info {
          color: #fff;
          font-size: 22px;
          margin-top: 5px;
        }
      }
      .content_right {
        color: #fff;
        .Collateral {
          margin-bottom: 15px;
          .Collateral_title {
            color: #00d37f;
            font-size: 12px;
            margin-bottom: 15px;
          }
          .hypothecate_num {
          }
        }
        .borrow {
          .borrow_title {
            color: #9669ed;
            font-size: 12px;
            margin-bottom: 15px;
          }
          .borrow_num {
          }
        }
      }
    }
    .progress_1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      height: 120px;
      .progress_title {
        color: #5f7786;
      }
      .progress_count {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0 10px;
        .percentage_num {
          color: #fff;
          font-size: 12px;
          margin-right: 5px;
        }
        .percentage_module {
          flex: 1;
        }
      }
      .progress_num {
        color: #5f7786;
      }
    }
  }
  .below {
    background-color: #f9fafb;
    padding: 0 15px;
    position: relative;
    .dataMsg {
      position: absolute;
      top: -20px;
      height: 400px;
      width: 390px;
      .Supply {
        background-color: #fff;
        box-shadow: 0px 1px 2px 1px #bfc8cd;
        .Supply_title {
          padding: 10px;
          border-bottom: 1px solid #f2f2f2;
        }
        .Supply_head {
          padding: 10px;
          color: #aab8c1;
          font-size: 12px;
          display: flex;
          border-bottom: 1px solid #f2f2f2;
          .Asset {
            flex: 1;
          }
          .Supply_right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .Balance {
            }
            .Collateral {
            }
          }
        }
        .Supply_content {
          display: flex;
          padding: 10px;
          .content_Info {
              flex: 1;
              display: flex;
              .Info_img{
                  margin-right: 10px;
              }
              .Info_name{
                  font-size: 12px;
                  .userName{
                      margin-bottom: 5px;
                  }
                  .variety{
                      color: #aab8c1;
                  }
              }
          }
          .content_right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .content_data {
                font-size: 12px;
                .money{
                    display: flex;
                    justify-content: end;
                    margin-bottom: 5px;
                }
                .data_currency{
                    color: #aab8c1;
                }
            }
            .content_btn {
                padding-right: 10px;
            }
          }
        }
      }
      .Borrow2 {
      }
    }
  }
}
</style>
