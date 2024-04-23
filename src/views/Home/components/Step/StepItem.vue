<script setup lang="ts"></script>

<template>
  <div class="step-item-wrap">
    <div class="box-item w-16 h-14 top-[-10rem] right-28"></div>
    <div class="box-item w-25 h-21 top-6 right-0"></div>
    <div class="box-item w-31 h-31 top-17 right-29"></div>

    <slot></slot>

    <div class="box-item w-17 h-17 bottom-17 left-0"></div>
    <div class="box-item w-16 h-16 bottom-[-6rem] left-14"></div>
  </div>
</template>

<style lang="scss" scoped>
.step-item-wrap {
  background-image: url('@img/bg-step.png');
  background-size: 100% 100%;
  width: 301rem;
  height: 555rem;
  text-align: center;
  color: #fff;
  font-size: 28rem;
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 35rem;

  .box-item {
    background-color: #9f7200;
    position: absolute;
  }
}
</style>
