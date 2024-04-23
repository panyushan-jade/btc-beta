<script setup lang="ts">
import Introduce from './components/Introduce/index.vue';
import Step from './components/Step/index.vue';
import Fund from './components/Fund/index.vue';
import Council from './components/Council/index.vue';
import Roadmap from './components/Roadmap/index.vue';
import SubScribe from './components/Subscribe/index.vue';
import { useAppStore } from '@store/appStore';
import Feature from './components/Features/index.vue';

const appStore = useAppStore();
</script>

<template>
  <div class="home-wrap">
    <img v-if="appStore.curDevice === 'phone'" src="@img/mob-banner.png" alt="" class="w-full" />
    <img v-else src="@img/banner.png" alt="" class="w-full" />

    <Introduce />

    <Feature />

    <Step />

    <Fund />

    <Council />

    <Roadmap />

    <SubScribe />
  </div>
</template>

<style lang="scss" scoped>
.home-wrap {
  /* background-image: url('@img/bg-home.png');
  background-size: cover;
  background-color: #080808; */

  padding-bottom: 235rem;

  @media (max-width: $phone) {
    padding-bottom: 50rem;
  }
}
</style>
