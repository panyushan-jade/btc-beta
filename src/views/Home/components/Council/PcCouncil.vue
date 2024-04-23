<script setup lang="ts">
import Header from '../Header/index.vue';
</script>

<template>
  <div class="council-wrap">
    <Header>THE BTC Beta COUNCIL</Header>

    <main class="council-content">
      <div>
        <section class="text-30 font-bold">
          An elite consortium of industry-leading decision makers
        </section>

        <section class="text-24 mt-33">
          Users who lock 10K $ Y202 can enter the BTC Beta DAO Council. BTC Beta adopts a voting
          mechanism for currency listing. DAO council members have the power to decide which
          projects will be launched on BTC Beta through voting. Our council and internal analyst
          team review projects through a strict due diligence process.
        </section>

        <button class="join-btn font-scrb">Join the Council</button>
      </div>

      <img src="@img/img-council.png" alt="" class="w-650 ml-104" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.council-wrap {
  width: 1582rem;
  margin: 488rem auto 0;

  .council-content {
    @include flexPos(space-between);
    margin-top: 108rem;
  }
}

.join-btn {
  margin-top: 93rem;
  font-size: 26rem;
  font-weight: bold;
  background-image: url('@img/btn-join-in.png');
  background-size: 100% 100%;
  width: 100%;
  height: 99rem;
}
</style>
