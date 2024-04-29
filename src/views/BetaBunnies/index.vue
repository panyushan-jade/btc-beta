<script setup lang="ts">
import { useAppStore } from "@/store/appStore";
import Vote from './Vote.vue'
import Community from './Community.vue';
import Application from './Application.vue';
const appStore = useAppStore();
const ContentType = ref('Apply')
const changeContentType = (value: string) =>{
  ContentType.value = value
}
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

    <Vote v-if="ContentType === 'List'" :changeContentType="changeContentType" />

    <Community v-if="ContentType === 'Binding'" />

    <Application v-if="ContentType === 'Apply'" />
  </div>
</template>

<style lang="scss" scoped>
.beta-bunnies-wrap {
  padding-bottom: 235rem;
}
</style>
