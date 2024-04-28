<script setup lang="ts">
import { reactive, ref } from "vue";
import { IBunnies } from "./useBunnies";
import { useAppStore } from "@/store/appStore";
import type { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
const appStore = useAppStore();
const tabIndex = ref(1);
const submitForm = reactive({
  name: null,
  X:null,
  region: null,
  id: null,
});

const submitHandle = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const rules = reactive({
    region: [
        { required: true, message: 'Select the validator type to apply for'},
    ],
    X: [
        { required: true, message: 'Please enter the URL'},
    ],
    id: [
        { required: true},
    ],
    name: [
        { required: true, message: 'Please enter your community name'},
    ],
})

const changeBtn = (value) => {
  tabIndex.value = value;
};
</script>

<template>
  <div
    class="w-90% mx-auto"
    :class="[appStore.curDevice === 'phone' ? '' : 'md:w-1000']"
  >
    <div
      class="flex border border-1 rounded-5 border-#fdffb5 flex sm:w-full md:w-full lg:w-50% mx-auto my-60"
    >
      <button
        class="lg:w-400 sm:(text-20 p-30) md:(text-20 p-30) lg:(text-14 p-20) flex-1"
        :class="[tabIndex === 1 ? 'color-black bg-#fdffb5' : 'color-white']"
        @click="changeBtn(1)"
      >
        Submit Application
      </button>
      <button
        class="lg:w-400 sm:(text-20 p-30) md:(text-20 p-30) lg:(text-14 p-20) flex-1"
        :class="[tabIndex === 2 ? 'color-black bg-#fdffb5' : 'color-white']"
        @click="changeBtn(2)"
      >
        My Applications
      </button>
    </div>
    <el-form
      ref="formRef"
      label-position="top"
      label-width="auto"
      :model="submitForm"
      :rules="rules"
      class="form-main sm:w-full md:w-full lg:w-80% mx-auto"
    >
      <el-form-item label="Validator Type" prop="region">
        <el-select
          v-model="submitForm.region"
          popper-class="validator-type"
          placeholder="Select the validator type to apply for"
        >
          <el-option label="Alpha Validator" value="shanghai" />
          <el-option label="Cryptic Validator" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item
        label="Alpha Aurum Bunnies ID"
        prop="id"
      >
        <el-input v-model="submitForm.id" placeholder="#001 - #100" />
      </el-form-item>
      <el-form-item label="X（Twitter）" prop="X">
        <el-input v-model="submitForm.X" placeholder="Please enter the URL" />
      </el-form-item>
      <el-form-item
        label="Community Name（Optional）"
        prop="name"
      >
        <el-input v-model="submitForm.name" placeholder="Please enter your community name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="sumit-btn mx-auto w-100% mt-30 sm:(p-60 text-40) md:(p-60 text-40) lg:(p-40 text-25)" @click="submitHandle(formRef)"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.validator-type{
    background-color: black !important;
}
</style>
<style lang="scss" scoped>
.sumit-btn{
    background-image: url("/src/assets/img/betaBunnies/vote_btn.png");
  background-size: 100% 100%;
  font-family: "scr";
  color:black;
  background-color: transparent;
  border:none;
  font-weight: bold;
}
.form-main{
    :deep(.el-input__wrapper){
        padding: 20rem
    }
    .el-select{
        width: 100%;
    }
}
:deep(.validator-type .el-select-dropdown){
    background-color: black !important;
}

:deep(.el-input__wrapper){
    background-color: transparent;
}
:deep(.el-input__wrapper.is-focus){
    box-shadow: 0 0 0 1px #dcdfe6 inset;
}
:deep(.el-select .el-input.is-focus .el-input__wrapper){
    box-shadow: 0 0 0 1px #dcdfe6 inset !important;
}
:deep(.el-input__inner){
    font-size: 25rem;
    text-transform: uppercase
}
:deep(.el-form-item__label){
    font-size: 30rem;
    color: white;
    margin-bottom: 20rem !important
}
:deep(.el-select-dropdown){
    background-color: black !important;
}
:deep(.el-form--label-top .el-form-item){
    margin-bottom: 50rem;
}
</style>
