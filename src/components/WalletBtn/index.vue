<script setup lang="ts">
import { useAppStore } from "@/store/appStore";
import { plusStar } from "@/utils/tools";
import { ref,onMounted,nextTick,reactive,watch } from "vue";
import { ElMessage } from "element-plus";
import useConnect from "@/hooks/useConnect"

import OKX from "@/assets/img/okx.png";
import UNISAT from "@/assets/img/unisat.png";
import ENKRYPT from "@/assets/img/enkrypt.png";
import XVERSE from "@/assets/img/xverse.png";
import LEATHER from "@/assets/img/leather.png";
import BIGGET from "@/assets/img/bigget.png";
import PHANTON from "@/assets/img/phanton.png";
import MAGIC from "@/assets/img/magic.png";
import POINTS from "@/assets/img/points.png";
import TOKEN from "@/assets/img/token.png";
import BUNNIES from "@/assets/img/bunnies.png";
import DISCONNECT from "@/assets/img/disconnect.png";
import WALLET from '@/assets/img/wallet.png';
import ARROW from '@/assets/img/arrow.png';
const appStore = useAppStore();
const { connected } = useConnect();
const isShowMenu = ref(false);
const connectDialogVisible = ref(false);
const installDialogVisible = ref(false);
const loadLink = ref(false);

const props = defineProps<{
  hearderHeight: any;
  changeWalletMenu: any;
  showMenu: boolean
}>();
let topStyle = reactive({ top: "0px", });
const beingUsedWallet = ref(null)

nextTick(() => {
  topStyle.top = props.hearderHeight + "px";
})
watch(() => props.showMenu, (value) => {
  if(value){
    isShowMenu.value = false
  }
})


const walletList = [
  {
    id: 1,
    name: "OKX WALLET",
    src: OKX,
    WalletName: "OKX"
  },
  {
    id: 2,
    name: "UNISAT WALLET",
    src: UNISAT,
    WalletName: "UNISAT"
  }
];

const menuList = [
  {
    id: 1,
    name: "BTC Beta Points",
    src: POINTS,
  },
  {
    id: 2,
    name: "My Runes Token",
    src: TOKEN,
  },
  {
    id: 3,
    name: "My Beta Bunnies",
    src: BUNNIES,
  },
  {
    id: 4,
    name: "Disconnect",
    src: DISCONNECT,
    handle:async () => {
      appStore.disconnectWallet()
    }
  },
];

/**
 * 连接钱包
 */
async function handleLink(m) {
  console.log(m);
  
  if(m.WalletName){
    beingUsedWallet.value = m
    // connectDialogVisible.value = true;
    connected(m.WalletName,(account,error)=>{
      // connectDialogVisible.value = false;
    },()=>{
      // connectDialogVisible.value = false;
      installDialogVisible.value = true
    })
  }else{
    ElMessage.info("Coming soon")
  }
  // not install弹窗
  // installDialogVisible.value = true;
  // 正在连接弹窗

  // if (loadLink.value) return;
  // loadLink.value = true;
  // await appStore.linkWallet();
  // loadLink.value = false;
}

const handleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
  document.body.style.overflow = isShowMenu.value ? 'hidden' : 'auto';
  props.changeWalletMenu(isShowMenu.value)
}
</script>

<template>
  <template v-if="appStore.curDevice === 'phone'">
    <div class="wallet-wrap text-24">
      <div
      v-if="appStore.defaultAccount && appStore.token"
        class="account-address flex"
        @click="handleMenu"
      >
          <img :src="WALLET" alt="" class="w-40">
          <span class="ml-10 mr-10 text-20">{{ plusStar(appStore.defaultAccount, 4, 4) }}</span>
          <img :src="ARROW" alt="">
      </div>
      <!-- 连接钱包 -->
      <button v-else class="connect-btn font-scr" @click="handleMenu">
        CONNECT WALLET
      </button>
    </div>
      <div class="menu-wrap">
      <!-- 遮罩层 -->
      <div v-show="isShowMenu" class="mask" @click="isShowMenu = false" :style="topStyle"></div>
      <!-- 菜单面板 -->
      <transition
        :duration="1000"
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <div class="wallet-panel" v-show="isShowMenu" :style="topStyle">
          <div class="pt-100 pb-100">
            <template v-if="appStore.defaultAccount">
              <div
              @click="handleLink(m)"
              class="flex justify-around cursor-pointer items-center menu-child-item hover:text-#FFD770 rounded-10 ml-10 mr-10 p-10"
              v-for="m in menuList"
              :key="m.id"
            >
              <img :src="m.src" class="ml-50" />
              <span class="flex-1 text-45">{{ m.name }}</span>
            </div>
            </template>
            <div class="flex flex-col items-center" v-else>
              <div class="text-center text-60">CHOOSE WALLET</div>
              <div
                @click="handleLink(m)"
                class="flex justify-around cursor-pointer items-center menu-child-item hover:text-#FFD770 border-1 border border-#8c855b rounded-10 ml-10 mr-10 p-10 w-80%"
                v-for="m in walletList"
                :key="m.id"
              >
                <img :src="m.src" class="ml-50"  :class="['ml-50', {'ml-60': m.name === 'UNISAT WALLET' || m.name === 'XVERSE WALLET'}]" />
                <span class="flex-1 text-15 text-30">{{ m.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  <template v-else>
    <div class="wallet-wrap text-24">
      <el-dropdown
        trigger="hover"
        popper-class="connect_wallet_btn"
        placement="bottom-start"
      >
        <!-- 已链接钱包展示钱包地址 -->
        <div v-if="appStore.defaultAccount" class="account-address flex">
          <img :src="WALLET" alt="">
          <span class="ml-10 mr-10">{{ plusStar(appStore.defaultAccount, 4, 4) }}</span>
          <img :src="ARROW" alt="">
        </div>
        <!-- 连接钱包 -->
        <button v-load="loadLink" v-else class="connect-btn font-scr">
          CONNECT WALLET
        </button>
        <template #dropdown>
          <template v-if="appStore.defaultAccount">
            <div
              @click="m.handle ? m.handle() : null"
              class="flex justify-around cursor-pointer items-center menu-child-item hover:text-#FFD770 rounded-10 ml-10 mr-10 p-10"
              v-for="m in menuList"
              :key="m.id"
            >
              <img :src="m.src" class="ml-20" />
              <span class="flex-1 text-15">{{ m.name }}</span>
            </div>
          </template>
          <template v-else>
            <div class="text-center text-25 mb-30">CHOOSE WALLET</div>
            <div
              @click="handleLink(m)"
              class="flex justify-around cursor-pointer items-center menu-child-item hover:text-#FFD770 border-1 border border-#8c855b rounded-10 ml-10 mr-10 p-10"
              v-for="m in walletList"
              :key="m.id"
            >
              <img :src="m.src" class="ml-20" :class="[ m.id === 1 || m.id === 2 ? 'ml-26' : '']" />
              <span class="flex-1 text-15">{{ m.name }}</span>
            </div>
          </template>
        </template>
      </el-dropdown>
    </div>
  </template>
  <el-dialog
    v-model="connectDialogVisible"
    v-if="beingUsedWallet"
    class="bg-#2b2b2b rounded-10"
    width="500rem"
    center
    align-center
    :show-close="false"
  >
    <div class="text-white text-25 text-center sm:text-40 md:text-40 lg:text-25 xl:text-25 pc:text-25">CHOOSE WALLET</div>
    <div class="flex flex-col items-center mt-10 mb-40">
      <img :src="beingUsedWallet.src" class="m-20 sm:w-120 md:w-120 lg:w-80 xl:w-80 pc:w-80" />
      <div class="text-white text-20 sm:text-35 md:text-35 lg:text-20 xl:text-20 pc:text-20">{{ beingUsedWallet.name }}</div>
    </div>
    <div class="flex justify-center items-center mt-20">
      <el-icon color="#fff59c" class="sm:text-35 md:text-35 lg:text-20 xl:text-20 pc:text-20"><Clock /></el-icon>
      <span class="text-20 ml-10 text-white sm:text-25 md:text-25 lg:text-20 xl:text-20 pc:text-20">Connecting...</span>
    </div>
    <el-divider class="border-#8c855b" />
    <button
      class="connect-btn font-scr w-full items-center text-white text-20 sm:text-35 md:text-35 lg:text-20 xl:text-20 pc:text-20"
      @click="connectDialogVisible = false"
    >
      Cancel
    </button>
  </el-dialog>
  <el-dialog
    v-model="installDialogVisible"
    class="bg-#2b2b2b rounded-10 border-1 border border-#fff59c install_dialog lg:w-400 xl:w-400 pc:w-400 md:w-550 sm:w-550"
    align-center
    :show-close="false"
  >
    <div class="text-white text-20 sm:flex-col lg:flex-row flex mb-30 items-center">
      <el-icon color="#fff59c" class="mr-10 sm:text-80 md:text-80 lg:text-30 xl:text-30 pc:text-30"><WarningFilled /></el-icon>
      <span class="md:text-30 sm:text-30 md:mt-20 sm:mt-20 lg:(mt-0 text-20) xl:(mt-0 text-20) pc:(mt-0 text-20)">{{ beingUsedWallet.WalletName }} wallet not isntalled</span>
    </div>
    <div class="color-#bebebe">PLEASE CLICK HERE TO WISIT THE PRODUCT</div>
    <div class="color-#bebebe">PAGE.AFTER IHSTALLIHG THE EXTEHSI0M,</div>
    <div class="color-#bebebe">PLEASE REFRESH THE PAGE.</div>
  </el-dialog>
</template>

<style lang="scss">
.connect_wallet_btn {
  width: 300rem !important;
}
.connect_wallet_btn {
  .menu-child-item:not(:first-child) {
    margin-top: 10rem !important;
  }
}
.install_dialog{
  .el-dialog__header{
display: none;
  }
  .el-dialog__body{
    line-height: 1.5
  }
}
// :deep(.el-dialog__header) {
//   display: none !important;
// }
</style>

<style lang="scss" scoped>
@import "./index.scss";

$fontSize: 27rem;

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  // z-index: 9999;
}

.wallet-panel {
  position: fixed;
  left: 0;
  top: 0;
  // padding-top: calc($mobTopBarHeight + 30rem);
  // padding-right: 22rem;
  background-color: rgba(0, 0, 0, 0.5);
  @include -width(100%, 750px, 750px);
  height: 100vh;
  // width: 100vw;
  overflow: auto;
  // z-index: 10000;
  color: #fff;
  padding-bottom: 100rem;
  font-size: $fontSize;
  font-weight: 400;
  text-align: center;

  // .menu-box {
  //   &:nth-of-type(1) {
  //     position: relative;

  //     /* &::before {
  //       content: '';
  //       width: calc(100% - 100rem);
  //       height: 2rem;
  //       background-color: #313131;
  //       position: absolute;
  //       left: 50rem;
  //       top: 0;
  //     } */
  //   }
  // }

  // .menu-item {
  //   @include flexPos(center);
  //   @include mixItem();
  //   font-size: $fontSize;
  //   font-weight: 400;

  //   &:last-child::after {
  //     /* @include menuItemLine(); */
  //   }
  // }
}

:deep(.wallet-wrap) {
  position: absolute;
  right: 45rem;
  top: $walletBtnMenuGap;

  .link-btn,
  .account-address {
    border: solid 1.5px #fff;
  }
}


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
