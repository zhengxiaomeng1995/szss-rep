<template>
  <div>
    <div>
      <template>
        <div class="block">
          <span class="demonstration">请选择日期</span>
          <el-date-picker v-model="value2"
                          align="right"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </template>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
