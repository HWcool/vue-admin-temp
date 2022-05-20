<template>
  <div>
    <block title="Calendar">
      <el-calendar v-model="value" />
    </block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style>

</style>
