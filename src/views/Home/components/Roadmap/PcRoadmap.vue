<script setup lang="ts">
import { useRoadmap } from './useRoadmap';
import Header from '../Header/index.vue';

const { roadmapList } = useRoadmap();
</script>

<template>
  <div class="roadmap-wrap">
    <Header class="mb-90">ROADMAP</Header>

    <div class="title-list">
      <li class="font-bold text-golden text-32" v-for="item in roadmapList" :key="item.title">
        {{ item.title }}
      </li>
    </div>
    <img src="@img/bg-roadmap.png" alt="" class="w-full h-38 mt-24 mb-30" />
    <div class="roadmap-content">
      <div v-for="item in roadmapList" :key="item.title">
        <li class="roadmap-content-text text-#fff" v-for="(c, inx) in item.content" :key="inx">
          {{ c }}
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roadmap-wrap {
  width: 1582rem;
  margin: 390rem auto 0;
}

.title-list,
.roadmap-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48rem;
  justify-content: flex-start;
  justify-items: space-between;
  font-size: 28rem;
}

.roadmap-content-text {
  &:not(:first-child) {
    margin-top: 20rem;
  }
}
</style>
