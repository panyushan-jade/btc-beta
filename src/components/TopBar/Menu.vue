<script setup lang="ts">
import { menuList, useTopBar } from './useTopBar';
import i18n from '@/locales/i18n';

const $t = i18n.global.t;

const { launchTo } = useTopBar();

const props = defineProps<{
  isShowMenu: boolean; // 是否展示菜单
}>();

const emits = defineEmits<{
  (hide: 'hide'): void; // 隐藏弹窗
}>();

const handleLaunchTo = (item) => {
  launchTo(item);
  emits('hide');
};
</script>

<template>
  <div class="menu-wrap">
    <!-- 遮罩层 -->
    <div v-show="props.isShowMenu" class="mask" @click="emits('hide')"></div>
    <!-- 菜单面板 -->
    <transition
      :duration="1000"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="menu-panel" v-show="props.isShowMenu">
        <div class="pt-200rem">
          <!-- 点击了其他页 -->
          <a class="menu-box" v-for="l in menuList" :key="l.id">
            <!-- 二级菜单 -->
            <el-collapse v-if="l?.children?.length">
              <el-collapse-item class="menu-tab" :name="l.id">
                <template #title>
                  <div class="flex-center text-center w-full h-full">
                    <div class="text-#fff hover:text-golden">{{ l.name }}</div>
                  </div>
                </template>

                <div
                  @click.stop="handleLaunchTo(it)"
                  class="menu-item mt-70!"
                  v-for="it in l.children"
                  :key="it.id"
                >
                  <div class="menu-tab flex-center text-center">
                    <div class="text-#fff hover:text-golden">{{ it.name }}</div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>

            <div class="menu-item" v-else @click.stop="handleLaunchTo(l)">
              <div class="menu-tab flex items-center">
                <div class="text-#fff hover:text-golden">{{ l.name }}</div>
              </div>
            </div>
          </a>

          <div class="mt-267">
            <div class="text-golden">COMMUNITY</div>
            <div class="flex-center mt-46">
              <img
                @click="launchTo({ link: 'https://twitter.com/btc_beta' })"
                src="@img/icon-twitter.png"
                alt=""
                class="w-90 cursor-pointer"
              />
              <img
                @click="launchTo({ link: 'https://t.me/BTCBetaOfficialGroup' })"
                src="@img/icon-tg.png"
                alt=""
                class="w-90 ml-103 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';

$fontSize: 27rem;

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.menu-panel {
  position: absolute;
  left: 0;
  top: 0;
  // padding-top: calc($mobTopBarHeight + 30rem);
  // padding-right: 22rem;
  background-color: rgba(0, 0, 0, 0.5);
  @include -width(100%, 750px, 750px);
  height: 100vh;
  overflow: auto;
  z-index: 10000;
  color: #fff;
  padding-bottom: 200rem;
  font-size: $fontSize;
  font-weight: 400;
  text-align: center;

  .menu-box {
    &:nth-of-type(1) {
      position: relative;

      /* &::before {
        content: '';
        width: calc(100% - 100rem);
        height: 2rem;
        background-color: #313131;
        position: absolute;
        left: 50rem;
        top: 0;
      } */
    }
  }

  .menu-item {
    @include flexPos(center);
    @include mixItem();
    font-size: $fontSize;
    font-weight: 400;

    &:last-child::after {
      /* @include menuItemLine(); */
    }
  }
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

:deep(.el-collapse) {
  border: none !important;
  --el-collapse-border-color: transparent;
}

:deep(.el-collapse-item__wrap) {
  background-color: transparent !important;
  border: none !important;
}

:deep(.el-collapse-item__header) {
  height: auto !important;
  margin-top: $gap;
  background-color: transparent !important;
  color: #fff !important;
  font-size: 28rem;
  font-weight: 400;
  line-height: 1 !important;

  /* border-bottom: solid 1px #4f3fc1; */
  /* &:not(:first-of-type) { */
  /* border-top: solid 1px #4f3fc1; */
  /* } */
}

:deep(.el-icon.el-collapse-item__arrow) {
  display: none;
}
</style>
