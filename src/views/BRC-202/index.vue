<script setup lang="ts">
import { IBunnies } from "../useBunnies";
import { useAppStore } from "@/store/appStore";
import { $GET, $POST } from "@/service/request";
import { ElMessage } from "element-plus";
import useInscriptions from "@/hooks/useInscriptions";
import AlphaNFTNumber from "@/NFT/AlphaNFTNumber.json";
import CrypticNFTNumber from "@/NFT/CrypticNFTNumber.json";
import useSignMessage from "@/hooks/useSignMessage";

const signMessage = useSignMessage();
const appStore = useAppStore();
const BindInfo = ref(false);
const nftId = ref("");
const pageNum = ref(1);
const pageSize = ref(10);
const pageTotal = ref(0);
const { Inscriptions, getInscriptions } = useInscriptions();
const myNFTID = ref("");
const addressList = ref([]);
const gathering = ref([]);
const In = ref(false);
const currentSelect = ref(1);

const tablist = [
  {
    title: "MINT",
    key: 1,
  },
  {
    title: "DEPLOY TOKEN",
    key: 2,
  },
  {
    title: "DEPLOY IDO",
    key: 3,
  },
];

const form = reactive({
  ticker: "",
  amount: "",
  mints: "",
  address: "",
  price: "",
  status:'1'
});

const onSubmit = () => {
  console.log('submit!')
}

const swtchType = (v) => (currentSelect.value = v);
</script>

<template>
  <img
      v-if="appStore.curDevice === 'phone'"
      src="@img/betaBunnies/mob-bunnies.png"
      alt=""
      class="w-full"
    />
    <img v-else src="@img/brc.png" alt="" class="w-full" />
  <div
    class="w-90% mx-auto flex flex-col items-center pb-300"
    style="margin-top:-250rem"
    :class="[appStore.curDevice === 'phone' ? '' : 'md:w-1300']"
  >
    <header class="switch-content-header">
      <div
        @click="swtchType(item.key)"
        :class="['type-item', { active: item.key === currentSelect },item.key === 1 ? 'leftbtn': item.key === 2 ? '' : 'rightbtn']"
        v-for="item in tablist"
        :key="item.key"
      >
        {{ item.title }}
      </div>
    </header>
    <el-form
      class="form-item"
      label-position="top"
      label-width="auto"
      :model="form"
    >
      <el-form-item label="Ticker">
        <el-input
          v-model="form.ticker"
          placeholder="Enter the 4-character ticker，such as：ordi"
        />
      </el-form-item>
      <el-form-item
        :label="
          currentSelect === 1
            ? 'Mint amount'
            : currentSelect === 2
            ? 'Total supply'
            : 'IDO amount'
        "
      >
        <el-input v-model="form.amount" />
      </el-form-item>
      <el-form-item label="Number of mints" v-if="currentSelect === 1">
        <el-slider v-model="form.mints" show-input />
      </el-form-item>
      <el-form-item
        :label="currentSelect === 2 ? 'Limit per mint' : 'Limit per IDO'"
        v-if="currentSelect !== 1"
      >
        <el-input v-model="form.mints" />
      </el-form-item>
      <el-form-item label="IDO price" v-if="currentSelect === 3">
        <el-input v-model="form.price" placeholder="BTC address">
          <template #append>sats/token</template>
        </el-input>
      </el-form-item>
      <el-form-item
        :label="currentSelect === 3 ? 'Notary address' : 'Recipient address'"
      >
        <el-input v-model="form.address" placeholder="BTC address" />
      </el-form-item>
      <el-form-item label="Height Selection" v-if="currentSelect === 3">
        <el-col :span="11">
          <el-input v-model="form.input1" placeholder="Height Start" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-input v-model="form.input2" placeholder="Height Start" />
        </el-col>
      </el-form-item>
      <el-form-item label="Should it be destroyed if not completed?" v-if="currentSelect === 3">
        <el-radio-group v-model="form.status">
          <el-radio value="1" label="1" size="large">NO</el-radio>
          <el-radio value="2" label="2" size="large">YES</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="operation">
        <el-button class="cancel sm:(px-80 py-40) md:(px-120 py-30) lg:(px-120 py-30)">Cancel</el-button>
        <el-button type="primary" @click="onSubmit" class="confirm sm:(px-80 py-40) md:(px-120 py-30) lg:(px-120 py-30)">Confirm</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.leftbtn{
  border-radius: 10rem 0 0 10rem;
}
.rightbtn{
  border-radius: 0 10rem 10rem 0;
}
.form-item {
  @include -width(90%, 62%, 62%);
}

.operation{
  :deep(.el-form-item__content){
    display: flex;
    justify-content: space-between;
  }
  .cancel{
    background: transparent;
    border: none;
    background-image: url('@img/betaBunnies/cancel.png');
    background-size: 100% 100%;
    // padding: 30rem 120rem;
    color: #FDFFB5;
    font-size: 20rem;
  }
  .confirm{
    background: transparent;
    border: none;
    background-image: url('@img/betaBunnies/confirm.png');
    background-size: 100% 100%;
    // padding: 30rem 120rem;
    color: black;
    font-size: 20rem;
  }
}

:deep(.el-input__wrapper) {
  background-color: transparent;
  padding: 14rem;
  .el-input__inner {
    font-size: 24rem;
  }
}
:deep(.el-form-item__label) {
  margin-top: 30rem;
  font-size: 20rem;
  color: white;
}
:deep(.el-form-item) {
  margin-bottom: 50rem;
}
.switch-content-header {
  display: flex;
  justify-content: center;
  margin-bottom: 50rem;
  // width: 80%;
  // position: absolute;
  // left: 50%;
  // top: 0;
  // transform: translate(-50%, -33.5rem);
  // background-color: #312913;

  .type-item {
    @include -width(200rem, 270rem, 270rem);
    height: 67rem;
    border: solid 2px #fdffb5;
    @include flexPos(center);
    @include -font-size(20rem, 22rem, 22rem);
    color: #fff;
    cursor: pointer;

    &.active {
      background-color: #fdffb5;
      color: #0a0909;
    }
  }
}

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
