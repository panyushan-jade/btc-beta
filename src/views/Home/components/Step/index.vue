<script setup lang="ts">
import StepItem from './StepItem.vue';
import Header from '../Header/index.vue';
</script>

<template>
  <div class="step-wrap mt-342">
    <Header class="pb-90">STEP FOR BTC Beta IDO</Header>
    <section class="step-content font-scr">
      <StepItem class="order-1">
        <div class="mt-127">BUY & HOLD</div>
        <div>PLATFORM TOKEN</div>

        <img src="@img/step/step1.png" alt="" class="w-167 mt-105" />
      </StepItem>
      <StepItem class="order-5 mt-40 md:(order-2 mt-0 ml-22)">
        <div class="mt-77">
          <li>GO TO</li>
          <li>BTC Beta</li>
          <li class="mt-20">WEBSITE</li>
          <li>AND CONNECT</li>
          <li>YOUR WALLET</li>
        </div>
        <img src="@img/step/step2.png" alt="" class="w-149 mt-55" />
      </StepItem>
      <StepItem class="order-2 ml-40 md:(order-3 ml-22)">
        <div class="mt-137">
          <li>LOCK YOUR</li>
          <li>PLATFORM TOKEN</li>
        </div>
        <img src="@img/step/step3.png" alt="" class="w-149 mt-115" />
      </StepItem>
      <StepItem class="order-3 mt-40 md:(order-4 ml-22 mt-0)">
        <div class="mt-122">
          <li>COMPLETE</li>
          <li>WHITELIST</li>
          <li>REQUIREMENT</li>
        </div>
        <img src="@img/step/step4.png" alt="" class="w-121 mt-100" />
      </StepItem>
      <StepItem class="order-4 mt-40 ml-40 md:(order-5 ml-22 mt-0)">
        <div class="mt-122">
          <li>PURCHASE AND</li>
          <li>CLAIM THE IDO</li>
          <li>TOKEN</li>
        </div>
        <img src="@img/step/step5.png" alt="" class="w-121 mt-100" />
      </StepItem>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.step-wrap {
  .step-content {
    @include flexPos(center);
    flex-wrap: wrap;
  }
}
</style>
