<script setup lang="ts">
import RABBIT from '@/assets/img/betaBunnies/rabbit.png'
import useInscriptions from "@/hooks/useInscriptions";
import { ElMessage } from 'element-plus'
import { IBunnies } from './useBunnies';
import { $POST } from '@/service/request';
import useSignMessage from "@/hooks/useSignMessage";
import { useAppStore } from '@store/appStore';
import AlphaNFTNumber from "@/NFT/AlphaNFTNumber.json"
import CrypticNFTNumber from "@/NFT/CrypticNFTNumber.json"

const props = defineProps<{
  voteList: any;
}>();
const signMessage = useSignMessage();
const { Inscriptions, getInscriptions } = useInscriptions();
const dialogTableVisible = ref(false);
const appStore = useAppStore();
const NFTID = ref('');
const nftVoted = ref('');
const In = ref(false)
const vote = async () => {
  if (In.value) {
    return
  }
  if (!appStore.defaultAccount) {
    return ElMessage({
      showClose: true,
      message: 'Link your wallet and try again',
      type: 'error'
    })
  }
  if (!NFTID.value) {
    return ElMessage({
      showClose: true,
      message: 'Please enter the correct NFTID',
      type: 'error'
    })
  }

  //不是本平台的NFT
  const NftAll = [...AlphaNFTNumber, ...CrypticNFTNumber]
  if (!NftAll.some((NFT: { id: string }) => NFTID.value === NFT.id)) {
    return ElMessage({
      showClose: true,
      message: 'Please enter the NFTID of this platform',
      type: 'error'
    })
  }
  In.value = true
  const sign = await signMessage(appStore.defaultAccount, appStore.wallet, appStore.defaultAccount)
  if (sign[0]) {
    In.value = false
    return ElMessage({
      showClose: true,
      message: 'Please complete your signature',
      type: 'error'
    })
  }
  await getInscriptions()
  if (Inscriptions.value.some((item: { inscriptionNumber: string }) => '#' + item.inscriptionNumber === NFTID.value)) {
    $POST('/vote/nftId', {
      "nftVoted": nftVoted.value,
      "userNftId": NFTID.value,
      "userNftType": AlphaNFTNumber.some((NFT: { id: string }) => NFTID.value === NFT.id) ? 1 : 2,
      "signingMessages": sign[1]
    }).then(res => {
      if (res.data) {
        ElMessage({
          showClose: true,
          message: 'Vote success',
          type: 'success'
        })
      } else {
        ElMessage({
          showClose: true,
          message: res.message,
          type: 'error'
        })
      }
    }).finally(() => {
      dialogTableVisible.value = false
      In.value = false
    })
  } else {
    In.value = false
    return ElMessage({
      showClose: true,
      message: 'Please enter your NFT ID',
      type: 'error'
    })
  }
}
</script>

<template>
  <div v-for="ls in props.voteList" :key="ls.id" class="w-300 text-center border border-#FFD770 border-1">
    <img :src="'https://ordinals.com/content/'+ls.serialNumberHash" alt=""
      class="w-full" />
    <div class="mt-26 mb-26 text-31 md:text-26">{{ ls.votes }} Votes</div>
    <button class="vote-btn p-10 m-auto mb-10"
      @click="() => { nftVoted = ls.nftId; dialogTableVisible = true }">VOTE</button>
  </div>
  <el-dialog v-model="dialogTableVisible" width="400">
    <h1 class="text-center">Vote NFT</h1>
    <el-input class="mt-20 text-sm" v-model="NFTID" style="height: 45px;" placeholder="Please enter your NFT id"
      clearable />
    <button class="vote-btn h-57 px-10 m-auto mb-10 mt-45 flex justify-center items-center" @click="vote">
      <svg v-if="In" viewBox="25 25 50 50" class='Loading'>
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
      VOTE
    </button>
  </el-dialog>
</template>

<style lang="scss" scoped>
.vote-btn {
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
