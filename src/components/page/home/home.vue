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
@import './home';
</style>
<script>
import home from './home.js'
export default home
</script>
