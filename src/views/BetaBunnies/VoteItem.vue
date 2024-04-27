<script setup lang="ts">
import RABBIT from '@/assets/img/betaBunnies/rabbit.png'
import { IBunnies } from './useBunnies';
const props = defineProps<{
 voteList: any;
}>();
</script>

<template>
  <div v-for="ls in props.voteList" :key="ls.id" class="w-300 text-center border border-#FFD770 border-1">
    <img :src="RABBIT" alt="" class="w-full" />
    <div class="mt-26 mb-26 text-31 md:text-26">15 Votes</div>
    <button class="vote-btn p-10 m-auto mb-10">VOTE</button>
  </div>
</template>

<style lang="scss" scoped>
.vote-btn{
    // margin-top: 93rem;
    font-size: 26rem;
    // font-weight: bold;
    background-image: url("/src/assets/img/betaBunnies/vote_btn.png");
    background-size: 100% 100%;
    width: 90%;
    font-family: 'scr';
    // height: 99rem;
}
</style>
