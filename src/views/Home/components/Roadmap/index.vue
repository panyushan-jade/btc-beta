<script setup lang="ts">
import PcRoadmap from './PcRoadmap.vue';
import MobRoadmap from './MobRoadmap.vue';
import { useAppStore } from '@/store/appStore';
const appStore = useAppStore();
</script>

<template>
  <MobRoadmap v-if="appStore.curDevice === 'phone'" />
  <PcRoadmap v-else />
</template>

<style lang="scss" scoped></style>
