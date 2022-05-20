<template>
  <div class="pd-20">
    <div class="demo-form">
      <block title="输入框">
        <div>
          <el-input v-model="input" :style="inputStyle" placeholder="请输入内容" />
        </div>
        <p>禁用状态</p>
        <div>
          <el-input v-model="input" :style="inputStyle" disabled placeholder="请输入内容" />
        </div>
      </block>
      <block title="带有icon 的输入框">
        <div class="demo-input-suffix">
          属性方式：
          <el-input
            v-model="input1"
            :style="inputStyle"
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
          />
          <el-input
            v-model="input2"
            :style="inputStyle"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          />
        </div>
        <div class="demo-input-suffix mr-y-15">
          slot 方式：
          <el-input
            v-model="input3"
            :style="inputStyle"
            placeholder="请选择日期"
          >
            <i slot="suffix" class="el-input__icon el-icon-date" />
          </el-input>
          <el-input
            v-model="input4"
            :style="inputStyle"
            placeholder="请输入内容"
          >
            <i slot="prefix" class="el-input__icon el-icon-search" />
          </el-input>
        </div>
      </block>
      <block title="可自适应文本高度的文本域">
        <div style="width: 400px">
          <el-input
            v-model="textarea1"
            type="textarea"
            autosize
            placeholder="请输入内容"
          />
          <div style="margin: 20px 0;" />
          <el-input
            v-model="textarea2"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
          />
        </div>
      </block>
      <block title="复合型输入框">
        <div style="width: 400px">

          <div>
            <el-input v-model="input5" placeholder="请输入内容">
              <template slot="prepend">Http://</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input v-model="input6" placeholder="请输入内容">
              <template slot="append">.com</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input v-model="input7" placeholder="请输入内容" class="input-with-select">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="餐厅名" value="1" />
                <el-option label="订单号" value="2" />
                <el-option label="用户电话" value="3" />
              </el-select>
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </div>
        </div>

      </block>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputStyle: {
        width: '200px'
      },
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      select: ''
    }
  }
}
</script>

<style>
.demo-form{
  width: 460px;
}
</style>
