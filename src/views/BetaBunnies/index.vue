<script setup lang="ts">
import VoteItem from "./VoteItem.vue";
import { useBunnies } from "./useBunnies";
import { useAppStore } from "@/store/appStore";
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
  <div class="beta-bunnies-wrap">
    <img
      v-if="appStore.curDevice === 'phone'"
      src="@img/betaBunnies/mob-bunnies.png"
      alt=""
      class="w-full"
    />
    <img v-else src="@img/betaBunnies/pc-bunnies.png" alt="" class="w-full" />
    <div class="w-90% md:w-1300 mx-auto">
      <div class="flex items-center justify-between mb-50">
        <div class="flex items-center">
          <button
            class="w-250 rounded-10 p-15 mr-20"
            :class="{
              'bg-#FDFFB5': currentIndex === 1,
              'text-white': currentIndex === 2,
            }"
            @click="clickHandle(1)"
          >
            Alpha Validator
          </button>
          <button
            class="w-250 rounded-10 p-15"
            :class="{
              'bg-#FDFFB5': currentIndex === 2,
              'text-white': currentIndex === 1,
            }"
            @click="clickHandle(2)"
          >
            Cryptic Validator
          </button>
        </div>
        <div>Apply Now</div>
      </div>
      <div class="flex flex-wrap gap-110 justify-evenly">
        <VoteItem :voteList="voteList" />
      </div>
    </div>
    <!-- <button class="go-to-buy" @click="launchTo">GO TO BUY</button> -->

    <!-- <BunnieItem :bunnie="bunniesList[0]" class="mt-210 md:(mt-0)" />

    <BunnieItem :bunnie="bunniesList[1]" class="mt-213" /> -->
  </div>
</template>

<style lang="scss" scoped>
.beta-bunnies-wrap {
  padding-bottom: 235rem;
}

.go-to-buy {
  background-image: url("@img/betaBunnies/bg-go-to-buy.png");
  background-size: 100% 100%;
  font-weight: bold;
  position: absolute;
  @include -top(546rem, 30vw, 30vw);
  left: 50%;
  transform: translateX(-50%);
  height: 80rem;
  @include -width(630rem, 490rem, 490rem);
  @include -font-size(38rem, 40rem, 40rem);
}
</style>
