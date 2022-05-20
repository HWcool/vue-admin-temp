<template>
  <div class="pd-20">
    <block title="Radio button 单选框">
      <el-radio v-for="item in items" :key="item" v-model="radio" :label="item">备选项{{ item }}</el-radio>
    </block>
    <block title="Radio button 按钮样式">
      <p>按钮样式的单选组合。</p>
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio2" size="medium">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio3" size="small">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" disabled />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" disabled size="mini">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
      </div>
    </block>
    <block title="Radio button 带边框的样式">
      <div>
        <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio3" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      radio: '',
      radio1: '',
      radio2: '1',
      radio3: '1',
      radio4: '1',
      radio5: '1'
    }
  }
}
</script>

<style>

</style>
