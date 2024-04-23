<script setup lang="ts"></script>

<template>
  <div class="fund-item-wrap">
    <header class="fund-item-header font-scrb">
      <slot name="title"></slot>
    </header>

    <section class="fund-item-content">
      <slot name="content"></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.fund-item-wrap {
  .fund-item-header {
    color: #ffd770;
    font-size: 28rem;
  }

  .fund-item-content {
    margin-top: 25rem;
    color: #fff;
    @include -font-size(23rem, 20rem, 20rem);
    line-height: 31rem;
  }
}
</style>
