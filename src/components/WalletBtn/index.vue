<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
import useConnect from '@/hooks/useConnect'
import usePublicKey from '@/hooks/usePublicKey'
import useSignMessage from '@/hooks/useSignMessage'
import { plusStar } from '@/utils/tools';
const { Address, connected } = useConnect();
const signMessage = useSignMessage();
const getPublicKey = usePublicKey();
const appStore = useAppStore();

const loadLink = ref(false);
/**
 * 连接钱包
 */
async function handleLink() {
  if (loadLink.value) return;
  loadLink.value = true;
  await connected('OKX');
  loadLink.value = false;
}
const Sign = async() => {
  console.log(Address);
  
  const sign = await signMessage(appStore.defaultAccount)
  if(sign[0]){
    return console.log('签名失败');
  }
  const publicKey = await getPublicKey()
   if(publicKey[0]){
    return console.log('获取公钥失败');
  }
  console.log({
    Message: appStore.defaultAccount,
    sign:sign[1],
    publicKey:publicKey[1],
  });
  
}
</script>

<template>
  <div class="wallet-wrap text-24">
    <!-- 已链接钱包展示钱包地址 -->
    <div v-if="appStore.defaultAccount" class="account-address" @click="Sign">
      {{ plusStar(appStore.defaultAccount, 4, 4) }}
    </div>

    <!-- 连接钱包 -->
    <button v-load="loadLink" v-else class="connect-btn font-scr" @click="handleLink">
      CONNECT WALLET
    </button>
  </div>
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
