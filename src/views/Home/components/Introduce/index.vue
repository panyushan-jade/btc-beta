<script setup lang="ts">
import IntroduceItem from './IntroduceItem.vue';
import Header from '../Header/index.vue';
</script>

<template>
  <div class="introduce-wrap mt-148">
    <Header class="mb-123">WHY CHOOSE BTC Beta?</Header>

    <IntroduceItem title="Core business">
      <template #face>
        <img src="@img/introduce/introduce1.png" alt="" class="w-68" />
      </template>

      <template #content>
        We are the first IDO platform focused on the Bitcoin ecosystem, providing an integrated
        environment that allows projects to issue tokens, inscriptions, runes, NFT and other assets
        on the Bitcoin main chain and its second-layer network
      </template>
    </IntroduceItem>

    <IntroduceItem title="Technological innovation">
      <template #face>
        <img src="@img/introduce/introduce2.png" alt="" class="w-58" />
      </template>

      <template #content>
        We creatively developed the BRC202 protocol, which allows project teams to issue tokens
        through paid engraving. This not only solves the cost problem in the traditional inscription
        process, but also provides a more flexible and economical financing method for the project.
      </template>
    </IntroduceItem>

    <IntroduceItem title="Service Scope">
      <template #face>
        <img src="@img/introduce/introduce3.png" alt="" class="w-56" />
      </template>

      <template #content>
        BTC Beta provides decentralized indexing protocols and AI-assisted query services. These are
        innovative services that lower the data access threshold for Web3 developers.
      </template>
    </IntroduceItem>

    <IntroduceItem title="Security and Decentralization">
      <template #face>
        <img src="@img/introduce/introduce4.png" alt="" class="w-62" />
      </template>

      <template #content>
        BTC Beta leverages the security and decentralization features of the Bitcoin network to
        provide a solid foundation for project issuance and financing.
      </template>
    </IntroduceItem>
  </div>
</template>

<style lang="scss" scoped>
.introduce-wrap {
  @include -width(100%, 1582rem, 1582rem);
  margin: 148rem auto 0;

  @media (max-width: $phone) {
    padding: 0 50rem;
  }

  .introduce-item-wrap {
    &:not(:last-child) {
      border-bottom: solid 1px #818181;
      padding-bottom: 58rem;
      margin-bottom: 44rem;
    }
  }
}
</style>
