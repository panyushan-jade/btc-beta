<script setup lang="ts">
import { menuList, useTopBar } from './useTopBar';
import WalletBtn from '@cps/WalletBtn/index.vue';

const { launchTo } = useTopBar();
</script>

<template>
  <div class="pc-topbar-wrap">
    <img
      src="@img/logo.png"
      alt=""
      class="w-84 cursor-pointer"
      @click="launchTo({ urlName: 'home' })"
    />

    <main class="list-content">
      <template v-for="menuItem in menuList" :key="menuItem.id">
        <el-dropdown trigger="hover" v-if="menuItem.children?.length">
          <span class="el-dropdown-link text-14 cursor-pointer text-#fff hover:text-#FFD770">
            {{ menuItem.name }}
          </span>
          <template #dropdown>
            <div
              @click="launchTo(m)"
              class="cursor-pointer menu-child-item hover:text-#FFD770"
              v-for="m in menuItem.children"
              :key="m.id"
            >
              {{ m.name }}
            </div>
          </template>
        </el-dropdown>

        <div @click="launchTo(menuItem)" class="text-14 cursor-pointer hover:text-#FFD770" v-else>
          {{ menuItem.name }}
        </div>
      </template>
    </main>

    <WalletBtn class="connect-btn font-scr text-14!">CONNECT WALLET</WalletBtn>
  </div>
</template>

<style lang="scss" scoped>
.pc-topbar-wrap {
  padding: 20rem 160rem;
  @media (min-width: $phone) and (max-width:1940px) {
    padding: 20rem 80rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161616;
}

.el-dropdown-link:focus-visible {
  outline: unset;
}

.list-content {
  width: 100%;
  @include flexPos(center);

  > div {
    &:not(:first-child) {
      margin-left: 74rem;
    }
  }
}
</style>
