<script setup lang="ts">
import { useSubscribe } from './useSubscribe';

const { emailAddr, doSubscribe, loading } = useSubscribe();
</script>

<template>
  <div class="subscribe-wrap">
    <div class="text-24">Never want to miss a sale</div>

    <div class="pt-29 text-31 font-bold leading-[53rem]">
      <div>sign up for our</div>
      <div class="mt-8">newsletter and get</div>
      <div class="mt-8">the latest ndiv andivpdates.</div>
    </div>

    <form @submit="doSubscribe" class="subscribe-inp">
      <div class="flex mr-95 inp-text">
        <input
          v-model="emailAddr"
          type="text"
          placeholder="Email address"
          class="email-inp text-center"
        />
        <span class="text-#E53434">*</span>
      </div>
      <button
        v-load="loading"
        class="font-scr text-31 py-14 px-31 mt-34 rounded-7 h-92 bg-golden w-full"
      >
        Subscribe
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.subscribe-wrap {
  color: #fff;
  margin: 302rem $mobHomeGap 231rem;
  padding: 82rem 40rem 111rem;
  background-color: #252015;
  border-radius: 12rem;
  text-align: center;
}

.subscribe-inp {
  margin-top: 100rem;
  font-size: 31rem;
  text-transform: none;

  .inp-text {
    @include flexPos(center);
    width: 100%;
    border: solid 1px #ffd770;
    border-radius: 15rem;
    height: 92rem;

    input {
      background: transparent;
      width: 70%;
      text-align: center;
      border: none;
      padding: 10rem;
      box-sizing: border-box;
      color: #fff;
      font-size: 31rem;

      &::placeholder {
        color: #fff;
        font-family: 'scr';
      }
    }
  }
}
</style>
