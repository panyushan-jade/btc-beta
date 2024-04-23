<script setup lang="ts">
import { useSubscribe } from './useSubscribe';

const { emailAddr, doSubscribe, loading } = useSubscribe();
</script>

<template>
  <div class="subscribe-wrap px-65 py-51 rounded-28">
    <div class="text-24">Never want to miss a sale</div>
    <div class="subscribe-container">
      <div class="pt-29 text-30">
        <div>sign up for our newsletter and get</div>
        <div>the latest news andivpdates.</div>
      </div>

      <form @submit="doSubscribe" class="subscribe-inp">
        <div class="flex mr-95">
          <input
            v-model="emailAddr"
            type="text"
            placeholder="Email address"
            class="email-inp"
          />
          <span class="text-#E53434">*</span>
        </div>
        <button v-load="loading" class="text-24 py-14 px-31 rounded-7 bg-golden font-scr">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe-wrap {
  color: #fff;
  background-color: #252015;
  width: 1582rem;
  margin: 288rem auto 0;
}
.subscribe-container {
  display: flex;
  justify-content: space-between;
  /* border-top: dashed 1px #fff; */
}

.subscribe-inp {
  @include flexPos(center);
  border: solid 1px #ffd770;
  border-radius: 15rem;
  height: 86rem;
  padding: 14rem;
  font-size: 24rem;

  input {
    background: transparent;
    width: 260rem;
    border: none;
    padding: 10rem;
    color: #fff;

    &::placeholder {
      color: #fff;
      font-family: 'scr';
    }
  }
}
</style>
