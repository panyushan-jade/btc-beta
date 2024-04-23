<script setup lang="ts">
const props = defineProps<{
  dir: 'up' | 'down';
}>();
</script>

<template>
  <div class="roadmap-bar-wrap">
    <div :class="['roadmap-bar-ball', `${props.dir === 'up' ? 'order-2' : 'order-1'}`]"></div>
    <hr :class="['roadmap-bar-line', `${props.dir === 'up' ? 'order-1' : 'order-2'}`]" />
  </div>
</template>

<style lang="scss" scoped>
.roadmap-bar-wrap {
  @include -width(21rem, 15rem, 15rem);
  @include flexPos(flex-start, center);
  flex-direction: column;

  .roadmap-bar-ball {
    @include -width(21rem, 15rem, 15rem);
    @include -height(21rem, 15rem, 15rem);
    background-color: #ffd770;
    border-radius: 50%;
  }

  .roadmap-bar-line {
    $w: 2px;
    width: $w;
    height: 100%;
    border: none;
    border-left: $w dashed #ffd770;
  }
}
</style>
