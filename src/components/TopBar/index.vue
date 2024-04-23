<script setup lang="ts">
import PcTopBar from './PcTopBar.vue';
import MobTopBar from './MobTopBar.vue';
import { useAppStore } from '@store/appStore';

const appStore = useAppStore();
</script>

<template>
  <MobTopBar v-if="appStore.curDevice === 'phone'" />
  <PcTopBar v-else />
</template>

<style lang="scss" scoped></style>
import MobTopBarVue from './MobTopBar.vue';
