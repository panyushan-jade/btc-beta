<script setup lang="ts">
import VoteItem from "./VoteItem.vue";
import { useBunnies } from "./useBunnies";
import { useAppStore } from "@/store/appStore";
import EDIT from '@/assets/img/betaBunnies/edit.png'
import { ref } from "vue";

const appStore = useAppStore();
const { bunniesList } = useBunnies();

const currentIndex = ref(1);
const clickHandle = (v) => {
  currentIndex.value = v;
};

const voteList = [
  { id: 1, votes: 10 },
  { id: 2, votes: 3 },
  { id: 3, votes: 5 },
  { id: 4, votes: 23 },
];
</script>

<template>
    <div class="w-90% md:w-1300 mx-auto">
      <div class="flex items-center lg:justify-between sm:justify-center md:justify-center mb-50 flex-wrap">
        <div class="flex items-center sm:w-full md:w-full lg:w-50%">
          <button
            class="lg:(w-250 text-15) rounded-10 p-25 mr-20 sm:(w-50% text-20) md:(w-50% text-20)"
            :class="{
              'bg-#FDFFB5': currentIndex === 1,
              'text-white': currentIndex === 2,
            }"
            @click="clickHandle(1)"
          >
            Alpha Validator
          </button>
          <button
            class="lg:(w-250 text-15) rounded-10 p-25 sm:(w-50% text-20) md:(w-50% text-20)"
            :class="{
              'bg-#FDFFB5': currentIndex === 2,
              'text-white': currentIndex === 1,
            }"
            @click="clickHandle(2)"
          >
            Cryptic Validator
          </button>
        </div>
        <div class="flex items-center lg:(mt-0 mb-0 text-15) sm:(mt-80 mb-30 text-30) md:(mt-10 mb-30 text-30)" >
          <img :src="EDIT" alt="" class="mr-10">
          Apply Now
        </div>
      </div>
      <div class="flex flex-wrap gap-110 justify-evenly">
        <VoteItem :voteList="voteList" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
