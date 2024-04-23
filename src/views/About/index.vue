<script setup lang="ts">
import { useAppStore } from '@/store/appStore';
const appStore = useAppStore();
</script>

<template>
  <div class="about-wrap pb-280">
    <img
      v-if="appStore.curDevice === 'phone'"
      src="@img/about/mob-banner-about.png"
      alt=""
      class="w-full"
    />
    <img v-elseÏ src="@img/about/banner-about.png" alt="" class="w-full" />

    <section
      class="w-90% border border-4rem border-#FFC93F mt-50 md:mt-0 px-25 py-52 md:(w-1600 border-none p-0) mx-auto text-23 md:text-20 leading-37rem md:leading-[28rem]"
    >
      BTC Beta aims to become a revolutionary platform within the Bitcoin ecosystem, focusing on
      providing financing and issuance services for early-stage projects, along with a range of data
      indexing services. Addressing the lack of a dedicated IDO platform in the Bitcoin ecosystem,
      as well as limitations in the engraving and financing processes of BRC20 tokens, BTC Beta has
      launched the BRC-202 protocol based on the Runes protocol. The BRC-202 protocol is compatible
      with messages within Runes and uses UTXOs to represent balances, achieving token financing
      issuance, batch transfers, destruction, and tagging among other new functions, all while
      reducing inscription numbering and Bitcoin storage occupancy. Furthermore, BTC Beta will
      continue to explore cross-chain interoperability and Bitcoin Layer2 technology, driving
      Bitcoin towards broader applications and development.
    </section>

    <section
      class="peoples-wrap w-80% mx-auto flex flex-col justify-between items-start mt-220 md:(flex-row w-1600)"
    >
      <div class="text-center flex-center flex-col">
        <img src="@img/about/about-person1.png" alt="" class="avatar mb-14" />
        <div class="about-person-title text-bold text-golden text-34 md:text-22">
          <div>Mr. Lucas Schmidt</div>
          <div class="mt-12">CEO</div>
        </div>
        <div
          class="text-23 md:text-20 text-[#BF9A39] mt-32 md:mt-14 leading-30rem md:leading-[26rem]"
        >
          Lucas Schmidt graduated from MIT, majoring in crypto-economics, and then led multiple
          innovative projects at a well-known fintech company in the United States. He has in-depth
          research and rich practical experience in decentralized finance.
        </div>
      </div>

      <div class="mt-180 md:mt-0 text-center flex-center flex-col mx-81">
        <img src="@img/about/about-person2.png" alt="" class="avatar mb-14" />
        <div class="about-person-title text-bold text-golden text-34 md:text-22">
          <div>Mr. Graeme Olson</div>
          <div class="mt-12">CTO</div>
        </div>
        <div
          class="text-23 md:text-20 text-[#BF9A39] mt-32 md:mt-14 leading-30rem md:leading-[26rem]"
        >
          Graeme Olson is a pioneering computer geek and early Bitcoin developer. With a rich
          background that includes contributions to the Ordinals project, Olson's expertise spans
          blockchain technology, smart contracts, and decentralized finance. Educated at MIT and
          Stanford, he has been instrumental in advancing the Bitcoin ecosystem through innovation
          and leadership. Olson's vision for BTC Beta focuses on enhancing interoperability,
          security, and scalability within the Bitcoin network.
        </div>
      </div>

      <div class="mt-180 md:mt-0 text-center flex-center flex-col">
        <img src="@img/about/about-person3.png" alt="" class="avatar mb-14" />
        <div class="about-person-title text-bold text-golden text-34 md:text-22">
          <div>Ms. Sophia Johnson</div>
          <div class="mt-12">CMO</div>
        </div>
        <div
          class="text-23 md:text-20 text-[#BF9A39] mt-32 md:mt-14 leading-30rem md:leading-[26rem]"
        >
          Sophia Johnson holds a Master's degree in Marketing from Sciences Po Paris, and has worked
          in the world's top advertising companies, focusing on digital marketing and brand
          building. She has unique insights into the popularization and commercialization of
          blockchain technology.
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.peoples-wrap {
  > div {
    flex: 1;
  }
}

.avatar {
  width: 328rem;
  height: 312rem;
}
</style>
