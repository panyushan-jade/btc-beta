<script setup lang="ts">
import PcCouncil from './PcCouncil.vue';
import MobCouncil from './MobCouncil.vue';
import { useAppStore } from '@/store/appStore';

const appStore = useAppStore();
</script>

<template>
  <MobCouncil v-if="appStore.curDevice === 'phone'" />
  <PcCouncil v-else />
</template>

<style lang="scss" scoped></style>
