<script setup lang="ts">
import RABBIT from "@/assets/img/5f3b93ba9a385f617d6d2b27f7cc4005bbad38df9c94574a4e955bb9c22a724ei0.jpeg";
import { IBunnies } from "../useBunnies";
import { useAppStore } from "@/store/appStore";
import { $GET, $POST } from "@/service/request";
import { ElMessage } from 'element-plus'
import useInscriptions from "@/hooks/useInscriptions";
import AlphaNFTNumber from "@/NFT/AlphaNFTNumber.json"
import CrypticNFTNumber from "@/NFT/CrypticNFTNumber.json"
import useSignMessage from "@/hooks/useSignMessage";

const signMessage = useSignMessage();
const appStore = useAppStore();
const BindInfo = ref(false)
const nftId = ref('')
const pageNum = ref(1);
const pageSize = ref(10);
const pageTotal = ref(0);
const { Inscriptions, getInscriptions } = useInscriptions();
const myNFTID = ref('')
const addressList = ref([])
const gathering = ref([])
const In = ref(false);
const currentSelect = ref(1)
watch(() => appStore.defaultAccount, async (address) => {
  if (address) {
    // $GET(`/community/parent/exist/${address}`).then((res)=>{
    //   BindInfo.value = res.data 
    //   console.log(res);
    // })
    $GET(`/community/parent/${address}`).then((res) => {
      BindInfo.value = res.data
      console.log(res, "获取父级信息");
    })
    await getInscriptions()
    console.log(Inscriptions.value, "获取子集信息");
    
    if (Inscriptions.value.length > 0) {
      const NftAll = [...AlphaNFTNumber, ...CrypticNFTNumber]
      console.log(NftAll.length)
      Inscriptions.value.map(item => {
        NftAll.forEach(NFT=>{
          if('#' + item.inscriptionNumber === NFT.id){
            if(gathering.value.length === 0){
              myNFTID.value = NFT.id
            }
            gathering.value.push({
              id: NFT.id,
              number: NFT.number
            })
          }
        })
      })
    }
  }
},{
  immediate: true
})
watch([myNFTID, pageNum], ([myNFTID, pageNum]) => {
  if (myNFTID) {
    $POST('/community/childs', {
      "nftId": myNFTID,
      "pageNum": pageNum,
      "pageSize": pageSize.value
    }).then((res: any) => {
      if (res.data) {
        pageTotal.value = res.data.total
        addressList.value = res.data.data
      }
    })
  }
}, {
  immediate: true
})
const Bind = async() => {
  if (!nftId) {
    return console.log('nftId is null');
  }
  if(In.value){
    return
  }
  In.value = true
  const sign = await signMessage(appStore.defaultAccount, appStore.wallet, appStore.defaultAccount)
  if (sign[0]) {
    In.value = false
    return console.log('签名失败');
  }
  $POST('/community/parent/bind', {
    nftId: nftId.value,
    signingMessages:sign[1]
  }).then(res => {
      console.log(res);
      if (res.data) {
        $GET(`/community/parent/${appStore.defaultAccount}`).then((res) => {
          BindInfo.value = res.data
          console.log(res, "获取父级信息");
        })
        return ElMessage({
          message: 'Binding successful',
          type: 'success'
        })
      } else {
        return ElMessage({
          message: res.message,
          type: 'error'
        })
      }

  }).finally(()=>{
    In.value = false
  })
}
const NextPage = () => {
  if (pageNum.value >= Math.ceil(pageTotal.value / pageSize.value)) {
    return
  } else {
    pageNum.value += 1
  }
}
const PreviousPage = () => {
  if (pageNum.value <= 1) {
    return
  } else {
    pageNum.value -= 1
  }
}

const changeSelect = v => currentSelect.value = v
// const addressList = [
//   {id:1,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:2,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:3,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
//   {id:4,name:'1FWS9rt6Zsntddddddddddd5Tx5nLXTZBUbmD9maPjCV8'},
// ];
</script>

<template>
  <div class="w-90% mx-auto" :class="[appStore.curDevice === 'phone' ? '' : 'md:w-1300']">
    <template v-if="appStore.curDevice === 'phone'">
      <header class="text-center text-50 mb-50">Your Community</header>
      <div class="w-full flex flex-col items-center">
        <span class="mb-40 text-20">Your Community Leader's Beta Bunnies</span>
        <img :src="RABBIT" alt="" class="w-400" />
        <div class="text-20 mb-10 w-90% flex flex-col">
          <span class="text-30 mt-20 mb-20"><span class="color-red">*</span>Binding Community</span>
          <input type="text"
            class="border-2 rounded-10 p-40 mb-50 bg-transparent color-white border-white community_input w-90%"
            placeholder="Please enter your community leader’s NFT ID" />
        </div>
        <button class="submit-btn p-40 w-90% font-bold text-50">submit</button>
      </div>
    </template>
    <template v-else>
      <header class="text-center text-30rem mb-50">Your Community</header>
      <div class="w-full flex justify-center">
        <div class="w-40% flex flex-col items-center" v-if="BindInfo">
          <span class="mb-40">Your Community Leader's Beta Bunnies</span>

          <img :src="'https://ordinals.com/content/' + BindInfo.serialNumberHash" alt=""
            class="w-250 h-250 border-1 border-solid border-[#E6E6E6]" />
          <!-- <img v-else :src="RABBIT" alt="" class="w-250 h-250" /> -->

        </div>

        <div v-if="!BindInfo" class="w-60% border border-1 rounded-5 border-#EFEFEF flex flex-col p-60">
          <div class="text-20 mb-10">
            <span class="color-red">*</span>Binding Community
          </div>
          <input type="text"
            class="border-2 rounded-10 p-40 mb-50 bg-transparent color-white border-white community_input"
            placeholder="Please enter your community leader’s NFT ID" v-model="nftId" />
          <button class="submit-btn h-75 text-25 flex justify-center items-center hover:transform-scale-110" @click="Bind"> 
            <svg v-if="In" viewBox="25 25 50 50" class='Loading'>
                <circle cx="50" cy="50" r="20"></circle>
            </svg>
            submit
          </button>
        </div>
      </div>
    </template>
    <div class="mt-150">
      <div class="sm:(text-25 text-center) md:(text-25 text-center) lg:(text-14 text-left) ">Your Own Community's
        Addresses
        List</div>
      <el-divider class="border-#EFEFEF" />
      <div class="flex justify-center gap-100 mb-50">
        <img :src="'https://ordinals.com/content/' + item.number" alt="" class="w-15% cursor-pointer" v-for="item in gathering" :class="[item.id == myNFTID ? 'border border-4 border-#FFC93F' : 'border border-4 border-#FFC93F brightness-50']" @click="myNFTID = item.id">
        <!-- <img :src="RABBIT" alt="" class="w-15% cursor-pointer" :class="[currentSelect == 1 ? 'brightness-50 border border-4 border-transparent' : 'border border-4 border-#FFC93F']" @click="changeSelect(2)"> -->
      </div>
      <div v-if="addressList.length > 0" v-for="ls in addressList" :key="ls"
        class="mb-10 text-center sm:(text-20) md:(text-20) lg:(text-14)">
        {{ ls }}
      </div>
      <div v-else class="text-center mt-100 color-#7E7E7E sm:text-20 md:text-20 lg:text-14">
        Your Community Currently Has no Address
      </div>
    </div>
    <div v-if="pageTotal > pageSize" class="flex items-center justify-center mt-200">
      <button
        class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5"
        @click="PreviousPage">Previous page</button>
      <span class="ml-30 mr-30 color-#fdffb5 sm:text-20 md:text-20 lg:text-16">{{ pageNum }}/{{
        Math.ceil(pageTotal / pageSize) }}</span>
      <button
        class="sm:(w-50% py-25 px-20) md:(w-50% py-25 px-20) lg:(w-180  p-15) p-20rem border-2 rounded-5 bg-#fdffb5 p-15"
        @click="NextPage">Next page</button>
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
