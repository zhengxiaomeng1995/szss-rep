<template>
    <div>
    <template>
      <el-table :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop="xuke"
                         label="学科"
                         sortable
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         sortable
                         width="180">
        </el-table-column>
        <el-table-column prop="fenshu"
                         label="分数"
                         :formatter="formatter">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: 'tupian',
  components: {},
  data() {
    return {
      tableData: [{
        xuke: '语文',
        name: '王小虎',
        fenshu: '60'
      }, {
        xuke: '数学',
        name: '王小虎',
        fenshu: '50'
      }, {
        xuke: '英语',
        name: '王小虎',
        fenshu: '70'
      }, {
        xuke: '物理',
        name: '王小虎',
        fenshu: '90'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>

<style scoped lang="less">
</style>
