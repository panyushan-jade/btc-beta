<script setup lang="ts">
import { useAppStore } from "@/store/appStore";
import Vote from './Vote.vue'
import Community from './Community.vue';
import Application from './Application.vue';
const appStore = useAppStore();


</script>

<template>
  <div class="beta-bunnies-wrap">
    <img
      v-if="appStore.curDevice === 'phone'"
      src="@img/betaBunnies/mob-bunnies.png"
      alt=""
      class="w-full"
    />
    <img v-else src="@img/betaBunnies/pc-bunnies.png" alt="" class="w-full" />
    <router-view>
    </router-view>
    <!-- <Vote /> -->

    <!-- <Community /> 两套代码PC和mob -->
    
    <!-- <Application /> -->
  </div>
</template>

<style lang="scss" scoped>
.beta-bunnies-wrap {
  padding-bottom: 235rem;
}
</style>
