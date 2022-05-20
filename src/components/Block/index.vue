<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
