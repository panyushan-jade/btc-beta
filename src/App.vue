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
import useCache from '@/hooks/useCache'
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
    useCache()
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
.Loading {
  width: 1.5em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
  margin-right: 10px;
}

.Loading circle {
  fill: none;
  stroke: #FFD770;
  stroke-width: 4;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

</style>
