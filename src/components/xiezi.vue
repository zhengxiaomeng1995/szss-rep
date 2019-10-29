<template>
  <div>
    <img class="xt"
         v-for="i in 100"
         :key="i"
         :src="`images/${i-1}.jpg`"
         alt="">
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.xt {
  width: 300px;
  height: 300px;
}
</style>
