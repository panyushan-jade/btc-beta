<script setup lang="ts">
export interface IData {
  type: 'Description' | 'Benefits';
  text: string[];
  active: boolean;
}

const props = defineProps<{
  data: IData[];
  startLink: string;
}>();

const curData = ref(props.data.find((item) => item.active));

const swtchType = (dataItem: IData) => {
  curData.value = dataItem;
};

const launchTo = (link: string) => {
  window.open(link);
};
</script>

<template>
  <div class="switch-content-wrap">
    <header class="switch-content-header">
      <div
        @click="swtchType(item)"
        :class="['type-item', { active: item.type === curData.type }]"
        v-for="item in props.data"
        :key="item.type"
      >
        {{ item.type }}
      </div>
    </header>

    <main class="text-22 text-#fff">
      <li class="text-item" v-for="(item, inx) in curData.text" :key="inx">
        {{ item }}
      </li>
    </main>

    <div v-show="curData.type === 'Benefits'" class="get-tasks" @click="launchTo(props.startLink)">
      Get Tasks
    </div>

    <div class="text-20 leading-[26rem] mt-9 text-#BF9A39 text-center" v-show="curData.type === 'Benefits'">
      Click this button to add the official customer service Telegram of Cryptic Carrot Bunnies NFT
      holders and get your weekly tasks. Note: We will never ask you for any fees under any name.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch-content-wrap {
  @include flexPos(center);
  flex-direction: column;
  position: relative;
  @include -width(645rem, 1600rem, 1600rem);
  /* @include -height(616rem, 340rem, 340rem); */
  border: solid 1px #ffc93f;
  margin-top: 85rem;
  padding: 70rem 95rem;

  @media (max-width: $phone) {
    padding: 48rem 40rem;
  }
}

.switch-content-header {
  display: flex;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -33.5rem);
  background-color: #312913;

  .type-item {
    @include -width(323rem, 270rem, 270rem);
    height: 67rem;
    border: solid 2px #ffc93f;
    @include flexPos(center);
    @include -font-size(27rem, 22rem, 22rem);
    color: #fff;
    cursor: pointer;

    &.active {
      background-color: #ffc93f;
      color: #0a0909;
    }
  }
}

.get-tasks {
  color: #ffc93f;
  font-size: 26rem;
  font-weight: bold;
  text-decoration-line: underline;
  margin-top: 50rem;
  cursor: pointer;
}

.text-item {
  &:not(:first-child) {
    @media (max-width: $phone) {
      margin-top: 40rem;
    }
    margin-top: 10rem;
  }
}
</style>
