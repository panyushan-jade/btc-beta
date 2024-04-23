<script setup lang="ts">
import FundItem from './FundItem.vue';
</script>

<template>
  <div class="mon-fund-wrap relative">
    <img src="@img/mob-fund-line.png" alt="" class="w-full" />

    <FundItem class="absolute left-195 top-0">
      <template #title>Application</template>
      <template #content>
        <div>Projects apply on the</div>
        <div>BTC Beta Governance Portal</div>
      </template>
    </FundItem>
    <FundItem class="absolute left-180 top-240 text-end">
      <template #title>Due Diligence</template>
      <template #content>
        <div>The BTC Beta Research team</div>
        <div>reviews applications and</div>
        <div>moves selected projects to</div>
        <div>the next step</div>
      </template>
    </FundItem>
    <FundItem class="absolute left-200 top-539">
      <template #title>The BTC Beta Council</template>

      <template #content>
        <div>The DAO Council receives the</div>
        <div>selected projects and makes</div>
        <div>a final decision</div>
      </template>
    </FundItem>
    <FundItem class="absolute left-110 top-823 text-end">
      <template #title>Pre-raise Support</template>

      <template #content>
        <div>Once approved, projects get the</div>
        <div>full BTC Beta team support</div>
        <div>leading up to the sale</div>
      </template>
    </FundItem>
    <FundItem class="absolute left-195 top-1120">
      <template #title>IDO or NFT Sale</template>

      <template #content>
        <div>Launch your token or NFT</div>
        <div>collection on the official</div>
        <div>BTC Beta website</div>
      </template>
    </FundItem>
  </div>
</template>

<style lang="scss" scoped></style>
