<script setup lang="ts"></script>

<template>
  <header class="font-pressStart">
    <slot></slot>
  </header>
</template>

<style lang="scss" scoped>
header {
  font-weight: 400;
  @include -font-size(31rem, 38rem, 38rem);
  color: #fff;
  text-align: center;
  @media (max-width: $phone) {
    line-height: 48rem;
  }
}
</style>
