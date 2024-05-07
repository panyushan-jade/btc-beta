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
    const appStore = useAppStore();
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
