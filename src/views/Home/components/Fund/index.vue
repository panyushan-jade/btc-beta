<script setup lang="ts">
import FundItem from './FundItem.vue';
import Header from '../Header/index.vue';
import MobFund from './MobFund.vue';
import { useAppStore } from '@/store/appStore';

const appStore = useAppStore();
</script>

<template>
  <div class="fund-wrap">
    <Header class="pb-90 px-50">HOW TO FUND YOUR PROJECT ON BTC Beta</Header>

    <MobFund v-if="appStore.curDevice === 'phone'" />
    <main class="fund-content" v-else>
      <div class="fund-row fund-row-1">
        <FundItem class="left-45">
          <template #title> Application </template>
          <template #content>
            <div>Projects apply on the</div>
            <div>BTC Beta Governance Portal</div>
          </template>
        </FundItem>

        <FundItem class="left-588">
          <template #title> The BTC Beta Council </template>

          <template #content>
            <div>The DAO Council receives the</div>
            <div>selected projects and makes</div>
            <div>a final decision</div>
          </template>
        </FundItem>

        <FundItem class="left-1205">
          <template #title>IDO or NFT Sale</template>

          <template #content>
            <div>Launch your token or NFT</div>
            <div>collection on the official</div>
            <div>BTC Beta website</div>
          </template>
        </FundItem>
      </div>

      <img src="@img/fund-line.png" alt="" class="w-full" />

      <div class="fund-row fund-row-2">
        <FundItem class="left-320">
          <template #title> Due Diligence </template>
          <template #content>
            <div>The BTC Beta Research team</div>
            <div>reviews applications and</div>
            <div>moves selected projects to</div>
            <div>the next step</div>
          </template>
        </FundItem>

        <FundItem class="left-880">
          <template #title>Pre-raise Support</template>

          <template #content>
            <div>Once approved, projects get the</div>
            <div>full BTC Beta team support</div>
            <div>leading up to the sale</div>
          </template>
        </FundItem>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.fund-wrap {
  margin-top: 388rem;
  padding-right: 50rem;

  .fund-content {
    position: relative;
    width: 1582rem;
    margin: 0 auto;
  }

  .fund-row {
    display: flex;
    position: relative;

    > div {
      position: absolute;
    }
  }

  .fund-row-1 {
    > div {
      top: -15rem;
    }
  }

  .fund-row-2 {
    > div {
      top: -27rem;
    }
  }
}
</style>
