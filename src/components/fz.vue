<template>
   <div>
    <div>
      <h1>鸡蛋灌饼10元一个(最多加三种食材)</h1>
      <el-checkbox v-model="arr"
                   label="鸡蛋"
                   :disabled="arr.length>=3 && !arr.includes('鸡蛋')"
                   border>鸡蛋+1元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="香肠"
                   :disabled="arr.length>=3 && !arr.includes('香肠')"
                   border>香肠+2元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="辣条"
                   :disabled="arr.length>=3 && !arr.includes('辣条')"
                   border>辣条+1元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="培根"
                   :disabled="arr.length>=3 && !arr.includes('培根')"
                   border>培根+3元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="鸡排"
                   :disabled="arr.length>=3 && !arr.includes('鸡排')"
                   border>鸡排+4元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="果子"
                   :disabled="arr.length>=3 && !arr.includes('果子')"
                   border>果子+1.5元</el-checkbox>
      <el-checkbox v-model="arr"
                   label="鱼排"
                   :disabled="arr.length>=3 && !arr.includes('鱼排')"
                   border>鱼排+3.5元</el-checkbox>
      <h1>鸡蛋灌饼总价格为:{{zongjia()}}</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      arr: [],
    }
  },
  methods: {
    zongjia() {
      var danjia = {
        '鸡蛋': 1,
        '辣条': 1,
        '香肠': 2,
        '培根': 3,
        '鸡排': 4,
        '果子': 1.5,
        '鱼排': 3.5,
      }
      var sum = 10;
      for (let i = 0; i < this.arr.length; i++) {
        sum += danjia[this.arr[i]]

      }
      return sum;
    }
  }
}
</script>

<style scoped lang="less">
</style>
