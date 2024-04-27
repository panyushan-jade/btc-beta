<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
import { plusStar } from '@/utils/tools';
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus'

import OKX from '@/assets/img/okx.svg';
import UNISAT from '@/assets/img/unisat.svg';
const appStore = useAppStore();
const connectDialogVisible = ref(false);
const installDialogVisible = ref(false);
const loadLink = ref(false);

const walletList = ref([
  {
    id: 1,
    name: 'UNISAT WALLET',
    src: OKX,
  },
  {
    id: 2,
    name: 'XVERSE WALLET',
    src: OKX,
  },
  {
    id: 3,
    name: 'LEATHER WALLET',
    src: OKX,
  },
  {
    id: 4,
    name: 'OKX WALLET',
    src: OKX,
  },
  {
    id: 5,
    name: 'BIGGET WALLET',
    src: OKX,
  },
  {
    id: 6,
    name: 'PHANTON WALLET',
    src: OKX,
  },
  {
    id: 7,
    name: 'MAGIO EDEN',
    src: OKX,
  },
  {
    id: 8,
    name: 'ENKRYRT',
    src: OKX,
  },
])


/**
 * 连接钱包
 */
async function handleLink(m) {
  // not install弹窗
  // installDialogVisible.value = true;
  // 正在连接弹窗
  connectDialogVisible.value = true


  // if (loadLink.value) return;
  // loadLink.value = true;
  // await appStore.linkWallet();
  // loadLink.value = false;
}
</script>

<template>
  <div class="wallet-wrap text-24">
    
    <el-dropdown trigger="hover" popper-class="connect_wallet_btn" placement="bottom-start">
      <!-- 已链接钱包展示钱包地址 -->
      <div v-if="appStore.defaultAccount" class="account-address">
        {{ plusStar(appStore.defaultAccount, 4, 4) }}
      </div>
      <!-- 连接钱包 -->
      <button v-load="loadLink" v-else class="connect-btn font-scr">
          CONNECT WALLET
      </button>
      <template #dropdown>
        <div class="text-center text-25">CHOOSE WALLET</div>
        <div
          @click="handleLink(m)"
          class="flex justify-around cursor-pointer menu-child-item hover:text-#FFD770 border-1 border border-#8c855b rounded-10 ml-10 mr-10 p-10"
          v-for="m in walletList"
          :key="m.id"
        >
          <img :src="m.src" class="ml-20" />
          <span class="flex-1 text-15">{{ m.name }}</span>
        </div>
      </template>
    </el-dropdown>
  </div>
  <el-dialog
    v-model="connectDialogVisible"
    class="bg-#2b2b2b rounded-10"
    width="500rem"
    center
    align-center
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div class="text-white text-25 text-center">CHOOSE WALLET</div>
    
    <div class="flex flex-col items-center mt-10">
      <img :src="OKX" class="m-20" />
      <div class="text-white text-20">OKX WALLET</div>
    </div>
    <div class="flex justify-center items-center mt-20">
      <el-icon color="#fff59c" size="30rem"><Clock /></el-icon>
      <span class="text-20 ml-10 text-white">Connecting...</span>
    </div>
    <el-divider class="border-#8c855b" />
    <button class="connect-btn font-scr w-full items-center text-white text-20" @click="connectDialogVisible = false">
      Cancel
    </button>
  </el-dialog>
  <el-dialog
    v-model="installDialogVisible"
    class="bg-#2b2b2b rounded-10 border-1 border border-#fff59c"
    width="500rem"
    align-center
  >
    <template #title>
      <div class="text-white text-20 flex"><el-icon color="#fff59c" class="mr-10"><WarningFilled /></el-icon>okx wallet not isntalled</div>
    </template>
    <div class="color-#bebebe">PLEASE CLICK HERE TO WISIT THE PRODUCT</div>
    <div class="color-#bebebe">PAGE.AFTER IHSTALLIHG THE EXTEHSI0M,</div>
    <div class="color-#bebebe">PLEASE REFRESH THE PAGE.</div>
  </el-dialog>
</template>

<style lang="scss">
.connect_wallet_btn{
    width: 300rem !important
}
.connect_wallet_btn{
  .menu-child-item:not(:first-child){
    margin-top: 10rem !important;
  }
}

</style>

<style lang="scss" scoped>

.wallet-wrap {
  .account-address,
  .connect-btn {
    @include flexPos(center);
    background-image: linear-gradient(to right, #fff59a, #fbf7d1);
    padding: 19rem 23rem;
    @media (min-width: $phone) {
      padding: 16rem;
    }
    @include -font-size(14rem, 23rem, 23rem);
    white-space: nowrap;
    border-radius: 8rem;
    color: #161616;
  }
}
</style>
