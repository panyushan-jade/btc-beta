<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
import { plusStar } from '@/utils/tools';
import { ref } from 'vue';
import OKX from '@/assets/img/okx.svg';
import UNISAT from '@/assets/img/unisat.svg';
const appStore = useAppStore();

const walletDialogVisible = ref(false)
const loadLink = ref(false);
/**
 * 连接钱包
 */
async function handleLink() {
  walletDialogVisible.value = true
  // if (loadLink.value) return;
  // loadLink.value = true;
  // await appStore.linkWallet();
  // loadLink.value = false;
}
</script>

<template>
  <div class="wallet-wrap text-24">
    <!-- 已链接钱包展示钱包地址 -->
    <div v-if="appStore.defaultAccount" class="account-address">
      {{ plusStar(appStore.defaultAccount, 4, 4) }}
    </div>

    <!-- 连接钱包 -->
    <button v-load="loadLink" v-else class="connect-btn font-scr" @click="handleLink">
      CONNECT WALLET
    </button>
  </div>
  <el-dialog
    v-model="walletDialogVisible"
    class="bg-#2b2b2b rounded-10"
    width="500rem"
    align-center
  >
    <template #title>
      <div class="text-white text-30">CHOOSE WALLET</div>
    </template>
    
    <button class="connect-btn font-scr w-full flex items-center mb-20 p-20 border-1 border border-#979797 rounded-10 bg-#414141" @click="handleLink">
      <img :src="OKX" />
      <span class="text-white text-20 ml-120">OKX WALLET</span>
    </button>
    <button class="connect-btn font-scr w-full flex items-center p-16 pl-20 border-1 border border-#979797 rounded-10 bg-#414141" @click="handleLink">
      <img :src="UNISAT" />
      <span class="text-white text-20 ml-105">UNISAT WALLET</span>
    </button>
  </el-dialog>
</template>


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
