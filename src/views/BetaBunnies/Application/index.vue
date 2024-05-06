<script setup lang="ts">
import { reactive, ref } from "vue";
import { IBunnies } from "../useBunnies";
import { useAppStore } from "@/store/appStore";
import type { FormInstance } from "element-plus";
import useInscriptions from "@/hooks/useInscriptions";
import AlphaNFTNumber from "@/NFT/AlphaNFTNumber.json"
import CrypticNFTNumber from "@/NFT/CrypticNFTNumber.json"
import usePublicKey from "@/hooks/usePublicKey";
import useSignMessage from "@/hooks/useSignMessage";
import { $POST, $GET } from "@/service/request";
import { ElMessage } from 'element-plus'


const formRef = ref<FormInstance>();
const appStore = useAppStore();
const signMessage = useSignMessage();
const getPublicKey = usePublicKey();
const tabIndex = ref(1);
const ApplicationRecord = ref([])
const {Inscriptions, getInscriptions} = useInscriptions();
const statusMap = {
  0: 'under review',
  1: 'under review',
  2: 'Success',
  3: 'Fail',
}
watch(() => appStore.defaultAccount, (Account) => {
  if (Account) {
    getInscriptions()
  }
});
watch(() => appStore.token, (token) => {
  if (token) {
    $GET('/user/apply/for/identifier/info').then(res=>{
      ApplicationRecord.value = res.data as []
    })
  }
});
const submitForm = reactive({
  name: null,
  X: null,
  region: null,
  id: null,
});

const submitHandle = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const sign = await signMessage(appStore.defaultAccount)
      if(sign[0]){
        return ElMessage({
          message:'Signature failed',
          type: 'error'
        });
      }
      // const publicKey = await getPublicKey()
      // if(publicKey[0]){
      //   return console.log('获取公钥失败');
      // }
      $POST('/user/apply/for/identifier',{
        twitterAccount: submitForm.X,
        communityName: submitForm.name,
        communityRegion: submitForm.region,
        nftId: submitForm.id,
        signingAddress: appStore.defaultAccount,
        signingMessages: sign[1],
        type:1
      }).then(res=>{
        if(res.data){
          $GET('/user/apply/for/identifier/info').then(res=>{
            ApplicationRecord.value = res.data as []
          })
          return ElMessage({
            message:'Submitted successfully',
            type: 'success'
          });
        }else{
          return ElMessage({
            message: res.message,
            type: 'error'
          });
        }
        
      })
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const verifyNFTNumber = (rule, value, callback) => {
  if (!value) return callback(new Error());

  const valid = (submitForm.region === 'Alpha' ? AlphaNFTNumber : CrypticNFTNumber).some(item => item.id === value);

  if (valid) {
    callback();
  } else {
    callback(new Error());
  }
}
const verifyAttribution = (rule, value, callback) => {
  if (!value) return callback(new Error());

  const valid = Inscriptions.value.some(item => '#'+item.inscriptionNumber === value);

  if (valid) {
    callback();
  } else {
    callback(new Error());
  }
}
const rules = reactive({
  region: [
    { required: true, message: 'Select the validator type to apply for' },
  ],
  X: [
    { required: true, message: 'Please enter the URL' },
  ],
  id: [
    { required: true },
    { validator: verifyNFTNumber, message: 'Invalid number' },
    { validator: verifyAttribution, message: 'This NFT does not belong to you' }
  ],
  name: [
    { required: true, message: 'Please enter your community name' },
  ],
})

const changeBtn = (value) => {
  tabIndex.value = value;
};
</script>

<template>
  <div class="w-90% mx-auto" :class="[appStore.curDevice === 'phone' ? '' : 'md:w-1000']">
    <div class="flex border border-1 rounded-5 border-#fdffb5 flex sm:w-full md:w-full lg:w-50% mx-auto my-60">
      <button class="lg:w-400 sm:(text-20 p-30) md:(text-20 p-30) lg:(text-14 p-20) flex-1"
        :class="[tabIndex === 1 ? 'color-black bg-#fdffb5' : 'color-white']" @click="changeBtn(1)">
        Submit Application
      </button>
      <button class="lg:w-400 sm:(text-20 p-30) md:(text-20 p-30) lg:(text-14 p-20) flex-1"
        :class="[tabIndex === 2 ? 'color-black bg-#fdffb5' : 'color-white']" @click="changeBtn(2)">
        My Applications
      </button>
    </div>
    <el-form v-if="tabIndex === 1" ref="formRef" label-position="top" label-width="auto" :model="submitForm" :rules="rules"
      class="form-main sm:w-full md:w-full lg:w-80% mx-auto">
      <el-form-item label="Validator Type" prop="region">
        <el-select v-model="submitForm.region" popper-class="validator-type"
          placeholder="Select the validator type to apply for">
          <el-option label="Alpha Validator" value="Alpha" />
          <el-option label="Cryptic Validator" value="Cryptic" />
        </el-select>
      </el-form-item>
      <el-form-item label="Alpha Aurum Bunnies ID" prop="id">
        <el-input v-model="submitForm.id" placeholder="#001 - #100" />
      </el-form-item>
      <el-form-item label="X（Twitter）" prop="X">
        <el-input v-model="submitForm.X" placeholder="Please enter the URL" />
      </el-form-item>
      <el-form-item label="Community Name（Optional）" prop="name">
        <el-input v-model="submitForm.name" placeholder="Please enter your community name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          class="sumit-btn mx-auto w-100% mt-30 sm:(p-60 text-40) md:(p-60 text-40) lg:(p-40 text-25)"
          @click="submitHandle(formRef)">Submit</el-button>
      </el-form-item>
    </el-form>
    <template v-else>
      <div v-for="item in ApplicationRecord" :key="item.nft_id" class="sm:w-full md:w-full lg:w-80% mx-auto border-b border-1 border-#fdffb5 mb-15 flex p-y-20">
        <span class="flex-1 text-left">{{item?.nft_ordinal !== undefined ? item?.nft_ordinal : '-'}}</span>
        <span class="flex-1 text-center">{{item?.application_status !== undefined ? statusMap[item?.application_status] : '-'}}</span>
        <span class="flex-1 text-right">{{item?.nft_id !== undefined ? item?.application_date : '-'}}</span>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.validator-type {
  background-color: black !important;
}
</style>
<style lang="scss" scoped>
.sumit-btn {
  background-image: url("/src/assets/img/betaBunnies/vote_btn.png");
  background-size: 100% 100%;
  font-family: "scr";
  color: black;
  background-color: transparent;
  border: none;
  font-weight: bold;
}

.form-main {
  :deep(.el-input__wrapper) {
    padding: 20rem
  }

  .el-select {
    width: 100%;
  }
}

:deep(.validator-type .el-select-dropdown) {
  background-color: black !important;
}

:deep(.el-input__wrapper) {
  background-color: transparent;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #dcdfe6 inset;
}

:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: 0 0 0 1px #dcdfe6 inset !important;
}

:deep(.el-input__inner) {
  font-size: 25rem;
  text-transform: uppercase
}

:deep(.el-form-item__label) {
  font-size: 30rem;
  color: white;
  margin-bottom: 20rem !important
}

:deep(.el-select-dropdown) {
  background-color: black !important;
}

:deep(.el-form--label-top .el-form-item) {
  margin-bottom: 50rem;
}
</style>