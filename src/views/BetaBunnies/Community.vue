<script setup lang="ts">
import RABBIT from "@/assets/img/betaBunnies/rabbit.png";
import { IBunnies } from "./useBunnies";
import { useAppStore } from "@/store/appStore";

const appStore = useAppStore();

const addressList = [
//   {id:1,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:2,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:3,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:4,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
];
</script>

<template>
  <div
    class="w-90% mx-auto"
    :class="[appStore.curDevice === 'phone' ? '' : 'md:w-1300']"
  >
    <template v-if="appStore.curDevice === 'phone'">
      <header class="text-center text-50 mb-50">Your Community</header>
      <div class="w-full flex flex-col items-center">
        <span class="mb-40 text-20">Your Community Leader's Beta Bunnies</span>
        <img :src="RABBIT" alt="" class="w-400" />
        <div class="text-20 mb-10 w-90% flex flex-col">
          <span class="text-30 mt-20 mb-20"><span class="color-red">*</span>Binding Community</span>
          <input
          type="text"
          class="border-2 rounded-10 p-40 mb-50 bg-transparent color-white border-white community_input w-90%"
          placeholder="Please enter your community leader’s NFT ID"
        />
        </div>
        <button class="submit-btn p-40 w-90% font-bold text-50">submit</button>
      </div>
    </template>
    <template v-else>
      <header class="text-center text-30rem mb-50">Your Community</header>
      <div class="w-full flex">
        <div class="w-40% flex flex-col">
          <span class="mb-40">Your Community Leader's Beta Bunnies</span>
          <img :src="RABBIT" alt="" class="w-250" />
        </div>
        <div class="w-60% border border-1 rounded-5 border-#EFEFEF flex flex-col p-60">
          <div class="text-20 mb-10">
            <span class="color-red">*</span>Binding Community
          </div>
          <input
            type="text"
            class="border-2 rounded-10 p-40 mb-50 bg-transparent color-white border-white community_input"
            placeholder="Please enter your community leader’s NFT ID"
          />
          <button class="submit-btn p-20 text-25">submit</button>
        </div>
      </div>
    </template>
    <div class="mt-150">
      <div class="sm:(text-25 text-center) md:(text-25 text-center) lg:(text-14 text-left) ">Your Own Community's Addresses List</div>
      <el-divider class="border-#EFEFEF" />
      <div
        v-if="addressList.length"
        v-for="ls in addressList"
        :key="ls.id"
        class="mb-10 sm:(text-20 text-center) md:(text-20 text-center) lg:(text-14 text-left)"
      >
        {{ ls.name }}
      </div>
      <div v-else class="text-center mt-100 color-#7E7E7E sm:text-20 md:text-20 lg:text-14">
        Your Community Currently Has no Address
      </div>
    </div>
    <div class="flex items-center justify-center mt-200">
        <button class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5">Previous page</button>
        <span class="ml-30 mr-30 color-#fdffb5 sm:text-20 md:text-20 lg:text-16">2/5</span>
        <button class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5 p-15">Next page</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community_input {
  padding: 20rem;
  outline: none;
}
.submit-btn {
//   font-size: 26rem;
  background-image: url("/src/assets/img/betaBunnies/vote_btn.png");
  background-size: 100% 100%;
//   width: 100%;
  font-family: "scr";
}
</style>
