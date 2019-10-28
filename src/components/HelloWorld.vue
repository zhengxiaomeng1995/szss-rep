<template>
  <div>
    <el-container>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>胖虎商城</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <router-link to="zh">

              <el-menu-item index="1-1">零食</el-menu-item>
            </router-link>
            <el-menu-item index="1-2">服装</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">鞋子</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">电子产品</template>
            <el-menu-item index="1-4-1">无人机</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      </el-col>
      </el-row>

      <el-container>
        <el-menu :default-active="activeIndex2"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="1">买车中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">卖车中心</template>
            <router-link to="/tupian">
              <el-menu-item>上传个人信息</el-menu-item>
            </router-link>
            <router-link to="dizhi">
              <el-menu-item index="2-2">上传车辆信息</el-menu-item>
            </router-link>
            <router-link to="lx">
              <el-menu-item index="2-3">提交资料</el-menu-item>
            </router-link>
            <el-submenu index="2-4">
              <template slot="title">客服中心</template>
              <el-menu-item index="2-4-1">人工客服</el-menu-item>
              <el-menu-item index="2-4-2">售后服务</el-menu-item>
              <el-menu-item index="2-4-3">现金提现</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3"
                        disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me"
               target="_blank">订单管理</a></el-menu-item>
          <div class="dl">
            <template>
              <div class="demo-avatar">
                <Avatar class="zc"
                        src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <Avatar class="zc"
                        style="color: #f56a00;background-color: #fde3cf">注册</Avatar>
                <template>
                  <Dropdown>
                    <a href="javascript:void(0)">
                      个人中心
                      <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>上传头像</DropdownItem>
                      <router-link to="xgzl">
                        <DropdownItem>修改资料</DropdownItem>
                      </router-link>
                      <DropdownItem>修改密码</DropdownItem>
                      <Dropdown placement="right-start">
                        <DropdownItem>
                          个人订单
                          <Icon type="ios-arrow-forward"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                          <DropdownItem>卖货订单</DropdownItem>
                          <DropdownItem>买货订单</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <DropdownItem>退出登录</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </template>
              </div>
            </template>
          </div>
        </el-menu>
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 6"
                              :key="item">
              <img :src="'../images/qc/'+item+'.jpg'"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>胖虎科技荣誉出品</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 1500px;
  height: 300px;
}
.dl {
  float: right;
  line-height: 60px;
}
.demo-avatar {
  display: flex;
  padding-right: 10px;
  justify-content: center;
  line-height: 60px;
}
</style>
