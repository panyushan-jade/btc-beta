<script setup lang="ts">
import PcSubscribe from './PcSubscribe.vue';
import MobTopBar from './MobSubscribe.vue';
import { useAppStore } from '@store/appStore';

const appStore = useAppStore();
</script>

<template>
  <MobTopBar v-if="appStore.curDevice === 'phone'" />
  <PcSubscribe v-else />
</template>

<style lang="scss" scoped></style>
