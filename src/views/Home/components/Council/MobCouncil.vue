<script setup lang="ts">
import Header from '../Header/index.vue';
</script>

<template>
  <div class="mob-council-wrap">
    <Header>THE BTC Beta COUNCIL</Header>

    <img src="@img/img-council.png" alt="" class="w-90% mx-auto mt-74" />

    <section class="text-30 font-scrb mt-31 text-center leading-[38rem]">
      An elite consortium of industry-leading decision makers
    </section>

    <button class="join-btn font-scrb">Join the Council</button>

    <section class="text-23 mt-65 text-center leading-[35rem]">
      Users who lock 10K $ Y202 can enter the BTC Beta DAO Council. BTC Beta adopts a voting
      mechanism for currency listing. DAO council members have the power to decide which projects
      will be launched on BTC Beta through voting. Our council and internal analyst team review
      projects through a strict due diligence process.
    </section>
  </div>
</template>

<style lang="scss" scoped>
.mob-council-wrap {
  margin-top: 374rem;
  width: 100%;
  padding: 0 50rem;
}

.join-btn {
  margin-top: 93rem;
  font-size: 31rem;
  font-weight: bold;
  background-image: url('@img/btn-join-in.png');
  background-size: 100% 100%;
  width: 100%;
  height: 97rem;
}
</style>
