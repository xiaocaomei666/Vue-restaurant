<template>
  <div class="home">
    <el-row>
      <el-col :span="7">
        <div class="home-left">
        <el-tabs v-model="activeName">
          <el-tab-pane label="点餐" name="order">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="goodsName"
                  label="商品名称"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  align="center"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="数量"
                  align="center"
                  width="70">
                </el-table-column>
                <el-table-column
                  align="center"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleteGood">删除</el-button>
                    <el-button type="text" size="small" @click="addGood">增加</el-button>
                  </template>
                </el-table-column>
          </el-table>
          </el-tab-pane>
          <el-tab-pane label="外卖" name="sale">外卖</el-tab-pane>
          <el-tab-pane label="挂单" name="register">挂单</el-tab-pane>
        </el-tabs>
        <div class="mt20">
          <el-button type="warning">挂单</el-button>
          <el-button type="danger">删除</el-button>
          <el-button type="success">结账</el-button>
        </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="home-right">
          <p class="title">常用商品</p>
          <div class="content-right">
            <el-tag
              v-for="tag in oftenGoods"
              :key="tag.name"
              closable
              :type="tag.type">
              {{tag.name}}
            </el-tag>
          </div>
          <div class="content-bottom">
            <el-tabs v-model="activeFood">
              <el-tab-pane label="汉堡" name="hamberger">
                <div class="p10">
                  <el-row>
                    <el-col :span="4" v-for="item in typeGoods" :key="item.id">
                      <el-card :body-style="{ padding: '0px' }" class="mr20 mb20">
                        <img :src="item.goodsImg" class="image">
                        <div class="p10">
                          <span>{{item.goodsName}}</span>
                          <div class="bottom clearfix">
                            <span class="time">￥{{item.price}}元</span>
                            <!-- <el-button type="text" class="button">增加</el-button> -->
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食" name="food">小食</el-tab-pane>
              <el-tab-pane label="饮料" name="juice">饮料</el-tab-pane>
              <el-tab-pane label="套餐" name="package">套餐</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.home {
  background-color: #fff;
}

.home,
.el-row,
.el-col,
.home-left,
.home-right {
  height: 100%;
}

.home-left {
  padding: 13px;
  border-right: 1px solid #eff2f7;
}

.home-right {
  background-color: #fff;
}

.title {
  height: 28px;
  line-height: 28px;
  margin: 0;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e4e7ed;
  font-size: 17px;
}

.content-right,
.content-bottom {
  padding: 15px;
}

.content-right > span {
  margin: 10px;
}

.image {
  width: 100%;
  display: block;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.time {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:after {
  clear: both;
}
</style>
<script>
export default {
  name: 'home',
  data () {
    return {
      activeName: 'order',
      tableData: [{
        goodsName: '可口可乐',
        price: 8,
        count: 1
      }, {
        goodsName: '香辣鸡腿堡',
        price: 15,
        count: 1
      }, {
        goodsName: '爱心薯条',
        price: 8,
        count: 1
      }, {
        goodsName: '甜筒',
        price: 8,
        count: 1
      }],
      oftenGoods: [
        {
          goodsId: 1,
          name: '香辣鸡腿堡 ￥18元',
          goodsName: '香辣鸡腿堡',
          price: 18,
          type: 'success'
        }, {
          goodsId: 2,
          name: '田园鸡腿堡 ￥15元',
          goodsName: '田园鸡腿堡',
          price: 15,
          type: 'warning'
        }, {
          goodsId: 3,
          name: '和风汉堡 ￥15元',
          goodsName: '和风汉堡',
          price: 15,
          type: ''
        }, {
          goodsId: 4,
          name: '快乐全家桶 ￥80元',
          goodsName: '快乐全家桶',
          price: 80,
          type: 'success'
        }, {
          goodsId: 5,
          name: '脆皮炸鸡腿 ￥10元',
          goodsName: '脆皮炸鸡腿',
          price: 10,
          type: 'danger'
        }, {
          goodsId: 6,
          name: '魔法鸡块 ￥20元',
          goodsName: '魔法鸡块',
          price: 20,
          type: 'warning'
        }, {
          goodsId: 7,
          name: '可乐大杯 ￥10元',
          goodsName: '可乐大杯',
          price: 10,
          type: 'info'
        }, {
          goodsId: 8,
          name: '雪顶咖啡 ￥18元',
          goodsName: '雪顶咖啡',
          price: 18,
          type: 'danger'
        }, {
          goodsId: 9,
          name: '大块鸡米花 ￥15元',
          goodsName: '大块鸡米花',
          price: 15,
          type: 'warning'
        }, {
          goodsId: 20,
          name: '香脆鸡柳 ￥17元',
          goodsName: '香脆鸡柳',
          price: 17,
          type: 'success'
        }
      ],
      activeFood: 'hamberger',
      typeGoods: [
        {
          goodsId: 1,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
          goodsName: '香辣鸡腿堡',
          price: 18
        }, {
          goodsId: 2,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '田园鸡腿堡',
          price: 15
        }, {
          goodsId: 3,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
          goodsName: '和风汉堡',
          price: 15
        }, {
          goodsId: 4,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '快乐全家桶',
          price: 80
        }, {
          goodsId: 5,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '脆皮炸鸡腿',
          price: 10
        }, {
          goodsId: 6,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
          goodsName: '魔法鸡块',
          price: 20
        }, {
          goodsId: 7,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
          goodsName: '可乐大杯',
          price: 10
        }, {
          goodsId: 8,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          goodsName: '雪顶咖啡',
          price: 18
        }, {
          goodsId: 9,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '大块鸡米花',
          price: 15
        }, {
          goodsId: 20,
          goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          goodsName: '香脆鸡柳',
          price: 17
        }
      ]
    }
  },
  methods: {
    deleteGood () {

    },
    addGood () {

    }
  }
}
</script>
