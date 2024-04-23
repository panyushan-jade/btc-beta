<script setup lang="ts">
import { useRoadmap } from './useRoadmap';
import Header from '../Header/index.vue';

const { roadmapList } = useRoadmap();
</script>

<template>
  <div class="mob-roadmap-wrap">
    <Header class="mb-90">ROADMAP</Header>

    <main class="flex">
      <img src="@img/mob-bg-roadmap.png" alt="" class="w-44 mr-29" />

      <section>
        <div class="roadmap-item" v-for="item in roadmapList" :key="item.title">
          <div class="font-scrb text-golden text-31 mb-10">{{ item.title }}</div>
          <div>
            <li class="roadmap-content" v-for="(c, inx) in item.content" :key="inx">
              {{ c }}
            </li>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.mob-roadmap-wrap {
  margin-top: 390rem;
  width: 100%;
  padding: 0 50rem;

  .roadmap-item {
    &:not(:first-child) {
      margin-top: 110rem;
    }
  }

  .roadmap-content {
    font-size: 23rem;
    line-height: 31rem;
    &:not(:first-child) {
      margin-top: 30rem;
    }
  }
}
</style>
