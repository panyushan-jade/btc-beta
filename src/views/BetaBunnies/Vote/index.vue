<script setup lang="ts">
import VoteItem from "./VoteItem.vue";
import { useBunnies } from "../useBunnies";
import { useAppStore } from "@/store/appStore";
import EDIT from '@/assets/img/betaBunnies/edit.png'
import { ref } from "vue";
import { $POST } from "@/service/request";
import { useRouter } from 'vue-router';
const { changeContentType } = defineProps({
  changeContentType: Function
})
const router = useRouter();
const appStore = useAppStore();
const { bunniesList } = useBunnies();

const currentIndex = ref(2);
const pageNum = ref(1);
const pageSize = ref(10);
const pageTotal = ref(0);
const candidatesList = ref([]);
const clickHandle = (v) => {
  pageNum.value = 1
  currentIndex.value = v;
};

watch([currentIndex, pageNum],([currentIndex, newPageNum])=>{
  candidatesList.value = [];
  $POST('/user/candidates', {
    "candidateType": currentIndex,
    "pageNum": newPageNum,
    "pageSize": pageSize.value
  }).then((res: any)=>{
    if(res.data){
      candidatesList.value = res.data.data;
      pageTotal.value = res.data.total
    }
    console.log(res,"验证人列表");
  })
},{
  immediate: true
})
const NextPage = () => {
  if(pageNum.value>=Math.ceil(pageTotal.value/pageSize.value)){
    return
  }else{
    pageNum.value+=1
  }
}
const PreviousPage = () => {
  if(pageNum.value<=1){
    return
  }else{
    pageNum.value-=1
  }
}
</script>

<template>
  <div class="w-90% md:w-1300 mx-auto">
    <div class="flex items-center lg:justify-between sm:justify-center md:justify-center mb-50 flex-wrap">
      <div class="flex items-center sm:w-full md:w-full lg:w-50%">
        <button class="lg:(w-250 text-15) rounded-10 p-25 mr-20 sm:(w-50% text-20) md:(w-50% text-20)" :class="{
          'bg-#FDFFB5': currentIndex === 2,
          'text-white': currentIndex === 1,
        }" @click="clickHandle(2)">
          Alpha Validator
        </button>
        <button class="lg:(w-250 text-15) rounded-10 p-25 sm:(w-50% text-20) md:(w-50% text-20)" :class="{
          'bg-#FDFFB5': currentIndex === 1,
          'text-white': currentIndex === 2,
        }" @click="clickHandle(1)">
          Cryptic Validator
        </button>
      </div>
      <div class="flex items-center lg:(mt-0 mb-0 text-15) sm:(mt-80 mb-30 text-30) md:(mt-10 mb-30 text-30) cursor-pointer hover:transform-scale-110"
        @click="()=>router.push('/beta-bunnies/Application')">
        <img :src="EDIT" alt="" class="mr-10">
        Apply Now
      </div>
    </div>
    <div class="flex flex-wrap gap-110 justify-evenly">
      <VoteItem :voteList="candidatesList" />
    </div>
    <div v-if="pageTotal > pageSize" class="flex items-center justify-center mt-200">
        <button class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5" @click="PreviousPage">Previous page</button>
        <span class="ml-30 mr-30 color-#fdffb5 sm:text-20 md:text-20 lg:text-16">{{ pageNum }}/{{ Math.ceil(pageTotal/pageSize) }}</span>
        <button class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5 p-15" @click="NextPage">Next page</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
