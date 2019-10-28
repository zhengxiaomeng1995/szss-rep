<template>
   <div class="box">
    <div class="box6">
      <template>
        <el-tabs v-model="activeName"
                 type="card"
                 @tab-click="handleClick">
          <el-tab-pane label="新闻"
                       name="first"
                       v-show="now=='新闻'">
            <img class="tu2"
                 :src="'../images/sg/'+1+'.jpg'"
                 alt="">
            111111111111</el-tab-pane>
          <el-tab-pane label="娱乐"
                       name="second">
            <img class="tu2"
                 :src="'../images/sg/'+2+'.jpg'"
                 alt="">
            22222222222</el-tab-pane>
          <el-tab-pane label="电视剧"
                       name="third">
            <img class="tu2"
                 :src="'../images/sg/'+3+'.jpg'"
                 alt="">33333333333</el-tab-pane>
          <el-tab-pane label="电影"
                       name="fourth">
            <img class="tu2"
                 :src="'../images/sg/'+4+'.jpg'"
                 alt="">送到国外国王杯为难他们突然，认为我v热</el-tab-pane>
          <el-tab-pane label="体育"
                       name="fifth">
            <img class="tu2"
                 :src="'../images/sg/'+5+'.jpg'"
                 alt="">
            那我劝你温泉风景区你仿佛</el-tab-pane>
          <el-tab-pane label="动画"
                       name="sixth"><a href="">的功夫今年乌龟乌龟牛额外付费</a></el-tab-pane>
          <el-tab-pane label="原创"
                       name="seventh"><a href="">的功夫今年乌龟乌龟牛额外付费收费是各公司然后</a></el-tab-pane>
          <el-tab-pane label="MTV"
                       name="eigth">的功夫今年乌龟乌龟牛额外付费而我和局外人</el-tab-pane>
          <el-tab-pane label="题材"
                       name="ninth">的功夫今年乌龟乌龟牛额外付费二v为v额头我</el-tab-pane>
          <el-tab-pane label="彩票"
                       name="tenth">的功夫今年乌龟乌龟牛额外付费二分五分维尔饿v</el-tab-pane>
          <el-tab-pane label="好莱坞"
                       name="eleventh">的功夫今年乌龟乌龟牛额外付费是的粉色</el-tab-pane>
          <el-tab-pane label="迪士尼"
                       name="teslfth">的功夫今年乌龟乌龟njdjnj牛额外付费</el-tab-pane>
        </el-tabs>
      </template>
    </div>
    <div class="box1">
      <h1>{{a}}</h1>
      <el-row>
        <el-button type="primary"
                   round
                   @click="a++">点我加</el-button>
        <el-button type="success"
                   round
                   @click="a--">点我减</el-button>
      </el-row>
    </div>
    <div class="box2">
      <img class="tu"
           :src="'../images/gugong/'+item+'.jpg'"
           alt="">
      <div>
        <el-button-group>
          <el-button type="primary"
                     icon="el-icon-arrow-left"
                     @click="item++"
                     :disabled="item==5">上一页</el-button>
          <el-button type="primary"
                     @click="item--"
                     :disabled="item==1">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
    </div>
    <div class="box4"></div>
    <div class="box3"
         :style="{'background-color':`rgb(${r},${g},${b})`}">

    </div>
    <div class="box5">
      <input type="range"
             min="0"
             max="255"
             v-model="r">
      <input type="number"
             min="0"
             max="255"
             v-model="r">
      <input type="range"
             min="0"
             max="255"
             v-model="g">
      <input type="number"
             min="0"
             max="255"
             v-model="g">
      <input type="range"
             min="0"
             max="255"
             v-model="b">
      <input type="number"
             min="0"
             max="255"
             v-model="b">
    </div>
    <div class="box6">
      <textarea cols="30"
                rows="10"
                v-model="nr"></textarea>
      <span :class="{'cur':nr.length>30}">{{nr.length}}个字</span>
      <el-row>
        <el-button type="warning"
                   :disabled="nr.length==0 || nr.length>100"
                   round>提交按钮</el-button>
        <el-button type="danger"
                   round
                   @click="nr=''"
                   :disabled="nr.length==0">清空按钮</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      a: 100,
      item: 1,
      r: 100,
      g: 50,
      b: 150,
      nr: '',
      activeName: 'first',
      now: '动画',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
.tu {
  width: 400px;
  height: 400px;
}
.box1 {
  float: left;
}
.box2 {
  float: left;
}
.box3 {
  width: 300px;
  height: 300px;
}
.box4 {
  clear: both;
}
.box5 {
  float: left;
}
.cur {
  color: red;
}
.tu2 {
  width: 300px;
  height: 300px;
}
.cur {
  background-color: green;
}
</style>
