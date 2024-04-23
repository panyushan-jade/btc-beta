<script setup lang="ts">
import BunnieItem from './BunnieItem.vue';
import { useBunnies } from './useBunnies';
import { useAppStore } from '@/store/appStore';

const appStore = useAppStore();

const { bunniesList } = useBunnies();

const launchTo = () => {
  window.open('https://www.okx.com/web3/marketplace/nft/collection/btc/alpha-aurum-bunnies');
};
</script>

<template>
  <div class="beta-bunnies-wrap">
    <img
      v-if="appStore.curDevice === 'phone'"
      src="@img/betaBunnies/mob-banner-betaBunnies.png"
      alt=""
      class="w-full"
    />
    <img v-else src="@img/betaBunnies/banner-betaBunnies.png" alt="" class="w-full" />

    <button class="go-to-buy" @click="launchTo">GO TO BUY</button>

    <BunnieItem :bunnie="bunniesList[0]" class="mt-210 md:(mt-0)" />

    <BunnieItem :bunnie="bunniesList[1]" class="mt-213" />
  </div>
</template>

<style lang="scss" scoped>
.beta-bunnies-wrap {
  padding-bottom: 235rem;
}

.go-to-buy {
  background-image: url('@img/betaBunnies/bg-go-to-buy.png');
  background-size: 100% 100%;
  font-weight: bold;
  position: absolute;
  @include -top(546rem, 30vw, 30vw);
  left: 50%;
  transform: translateX(-50%);
  height: 80rem;
  @include -width(630rem, 490rem, 490rem);
  @include -font-size(38rem, 40rem, 40rem);
}
</style>
