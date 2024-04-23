<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="introduce-item-wrap">
    <div class="flex items-center font-pressStart">
      <slot name="face"></slot>
      <div class="text-#FFD770 text-26 ml-26 leading-[35rem]">{{ props.title }}</div>
    </div>

    <div class="font-scr leading-[32rem] introduce-content mt-48 text-23 md:(mt-20 text-20)">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce-content {
  @media (max-width: $phone) {
    line-height: 1.8;
  }
}
</style>
