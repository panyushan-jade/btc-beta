<script setup lang="ts">
import Header from '../Header/index.vue';
</script>

<template>
  <div class="feature-wrap">
    <Header>FEATURES OF BRC-202</Header>
    <main class="feature-main">
      <div class="feat-item">
        <div class="feat-title font-bold">High Compatibility</div>
        <div class="feat-content">
          BRC-202 is highly compatible with BRC-20 and Runes protocols, providing developers with a
          familiar environment and lowering the technical barrier to entry.
        </div>
      </div>

      <div class="feat-item">
        <div class="feat-title font-bold">Innovative Concept of Paid Engraving</div>
        <div class="feat-content">
          Offers a flexible and economical financing method, optimizing the fundraising process.
        </div>
      </div>

      <div class="feat-item">
        <div class="feat-title font-bold">Decentralized Financing and Issuance</div>
        <div class="feat-content">
          Leverages the design principles of decentralization and smart contracts to ensure fair and
          transparent financing activities, with automated token distribution.
        </div>
      </div>

      <div class="feat-item">
        <div class="feat-title font-bold">Enhanced Interoperability</div>
        <div class="feat-content">
          Facilitates cross-chain interactions and leverages Layer2 advancements, reducing
          transaction costs and broadening market reach.
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.feature-wrap {
  @include -width(100%, 1582rem, 1582rem);
  margin: 281rem auto 0;
  @include -padding-x(50rem, 0, 0);
}

.feature-main {
  display: flex;
  font-size: 20rem;
  margin-top: 73rem;
  text-align: center;

  @media (max-width: $phone) {
    flex-direction: column;
  }

  .feat-item {
    flex: 1;
    &:not(:first-child) {
      @media (min-width: $phone) {
        margin-left: 65rem;
      }

      @media (max-width: $phone) {
        margin-top: 65rem;
      }
    }
  }

  .feat-title {
    color: #ffd770;
    margin-bottom: 23rem;
    @include -line-height(37rem, 22rem, 22rem);
    @include -font-size(27rem, 20rem, 20rem);
  }

  .feat-content {
    @include -line-height(37rem, 28rem, 28rem);
    @include -font-size(23rem, 20rem, 20rem);
  }
}
</style>
