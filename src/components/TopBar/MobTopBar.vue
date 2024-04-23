<script setup lang="ts">
import Menu from './Menu.vue';
import WalletBtn from '@cps/WalletBtn/index.vue';
import { useTopBar } from './useTopBar';

const { pickLang, langList, curLang, launchTo } = useTopBar();

// 菜单是否为开启状态
const isOpenMenu = ref(false);
function handleMenu() {
  isOpenMenu.value = !isOpenMenu.value;
  // 控制外部滚动条是否能滚动
  document.body.style.overflow = isOpenMenu.value ? 'hidden' : 'auto';
}
</script>

<template>
  <div class="top-bar-wrap">
    <div class="top-bar-content absolute bg-[tomato] h-full flex items-center">
      <!-- 控制菜单显示和隐藏 按钮 -->
      <div :class="['toggle-container', { opening: isOpenMenu }]" @click="handleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <img
        @click="launchTo({ urlName: 'home' })"
        src="@img/logo.png"
        alt=""
        class="w-94 ml-38 relative z-99999"
      />

      <!-- 一些工具：钱包、选择语言等 -->
      <div class="top-bar-tools">
        <!-- 已链接钱包展示钱包地址 -->
        <WalletBtn />
      </div>

      <!-- 移动端菜单 -->
    </div>
    <Menu :isShowMenu="isOpenMenu" @hide="handleMenu" />
  </div>
</template>

<style lang="scss" scoped>
.top-bar-wrap {
  width: 100%;
  height: $mobTopBarHeight;
  @include flexPos(space-between);
  padding: 0 45rem;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  .top-bar-content {
    /* width: calc(100% - 42rem * 2); */
    width: 100%;
    left: 0;
    padding: 0 42rem;
    background-color: #161616;
    z-index: 999999;
  }
}

.top-bar-tools {
  @include flexPos(flex-start);
  position: absolute;
  right: 22rem;
  z-index: 99999;

  .account-address,
  .link-btn {
    margin-left: 18rem;
  }

  .lang-container {
    cursor: pointer;
    @include flexPos(flex-start);
    color: #fff;
    font-size: 24rem;

    .icon-lang {
      width: 32rem;
      margin-right: 10rem;
    }
  }
}

.toggle-container {
  $boxHeight: 20px;
  $barHeight: 4.5px;

  cursor: pointer;
  height: 26px;
  @include flexPos(space-between);
  flex-direction: column;
  z-index: 9999999;
  /* position: absolute; */

  .bar {
    transition: 0.4s;
    width: 33px;
    height: $barHeight;
    background-color: #fdffb5;
    transform-origin: center;
    border-radius: 100px;
  }

  &.opening {
    $y: calc($boxHeight / 2 - $barHeight / 2);
    $dy: calc((-#{$boxHeight} / 2 + #{$barHeight} / 2));

    .bar:nth-child(1) {
      transform: translateY($y) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: translateY(-14px) rotate(-45deg);
    }
  }
}
</style>
