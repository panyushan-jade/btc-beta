<template>
  <!-- 顶部栏 -->
  <TopBar />

  <!-- 各路由 -->
  <div id="mainContainer">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta?.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta?.keepAlive" />
    </router-view>
  </div>

  <div v-if="appStore.curDevice === 'phone'" class="text-23 text-center text-#fff bg-#080808 pb-100">
    © 2024 BTC Beta All rights reserved.
  </div>
  <Footer v-else />
</template>

<script>
import TopBar from '@cps/TopBar/index.vue';
import Footer from '@cps/Footer/index.vue';
import { useAppStore } from '@store/appStore';
import usePublicKey from "@/hooks/usePublicKey";
import useSignMessage from "@/hooks/useSignMessage";
import { $POST } from '@/service/request';
const walletTypeMap = {
  'OKX':1,
  'UNISAT':2
}
export default {
  components: {
    TopBar,
    Footer,
  },
  setup() {
    const signMessage = useSignMessage();
    const getPublicKey = usePublicKey();
    const appStore = useAppStore();
    watch(()=>appStore.defaultAccount,async (address)=>{
      if(address){
        const sign = await signMessage(address)
        if(sign[0]){
          return console.log('签名失败');
        }
        const publicKey = await getPublicKey()
        if(publicKey[0]){
          return console.log('获取公钥失败');
        }
        $POST('/login',{
          address,
          publicKey: publicKey[1],
          walletType: walletTypeMap[appStore.wallet],
          hash: address,
          // signatureHash: 'adminhucdhcd',
          signatureHash: sign[1]
        }).then(res=>{
          if(res.code === 1){
            appStore.setToken(res.data)
          }
          console.log(res);
        })
      }
    })
    return { appStore };
  }
};
</script>

<style lang="scss">
#mainContainer {
  background-image: url('@img/bg-home.png');
  background-size: cover;
  background-color: #080808;

  z-index: 2;
  position: relative;

  @media (max-width: $phone) {
    padding-top: $mobTopBarHeight;
  }
}
.el-dialog{
  background: #161616 !important;
}
</style>
