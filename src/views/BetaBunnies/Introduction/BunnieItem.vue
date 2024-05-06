<script setup lang="ts">
// import SwitchContent, { IData } from '@cps/SwitchContent/index.vue';
import { IBunnies } from '../useBunnies';
const props = defineProps<{
  bunnie: IBunnies;
}>();
</script>

<template>
  <div class="bunnie-item-wrap">
    <img :src="props.bunnie.face" alt="" class="w-389 md:w-334" />
    <div class="mt-26 text-31 md:text-26">{{ props.bunnie.name }}</div>
    <div class="flex-center mt-26">
      <img src="@img/betaBunnies/icon-bitCoin.png" alt="" class="mr-9 w-46" />
      <div class="text-bold text-30">{{ props.bunnie.price }}</div>
    </div>

    <SwitchContent :data="props.bunnie.content" :startLink="props.bunnie.getStartLink" />
  </div>
</template>

<style lang="scss" scoped>
.bunnie-item-wrap {
  font-family: Press Start 2P, Press Start 2P;
  font-size: 26rem;
  color: #ffd770;
  line-height: 30rem;
  @include flexPos(center);
  flex-direction: column;
}
</style>
