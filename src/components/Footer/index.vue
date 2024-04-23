<script setup lang="ts">
import { useFooter, IFooter } from './useFooter';
const { footerList } = useFooter();
import { useLaunchTo } from '@/hooks/useLaunchTo';

const { launchTo } = useLaunchTo();

// const launchTo = (item: Optional<IFooter, 'name'>) => {
//   if (item.link) {
//     window.open(item.link);
//   }
// };
</script>

<template>
  <div class="footer-wrap">
    <div class="flex justify-between items-start">
      <img src="@img/logo.png" alt="" class="w-193" />
      <section class="flex">
        <div
          v-for="(list, inx) in footerList"
          :key="list.title"
          :class="[inx === 1 ? 'mx-130' : '']"
        >
          <div class="text-golden mb-61 text-28">{{ list.title }}</div>
          <div>
            <li
              @click="launchTo(item)"
              class="footer-item-text cursor-pointer"
              v-for="item in list.children"
              :key="item.name"
            >
              {{ item.name }}
            </li>
          </div>
        </div>
      </section>

      <div class="community">
        <div class="text-golden text-28">Community</div>
        <div class="flex mt-61">
          <img
            src="@img/icon-twitter.png"
            alt=""
            class="w-70 mr-52 cursor-pointer"
            @click="launchTo({ link: 'https://twitter.com/btc_beta' })"
          />
          <img
            @click="launchTo({ link: 'https://t.me/BTCBetaOfficialGroup' })"
            src="@img/icon-tg.png"
            alt=""
            class="w-70 cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div class="mt-166 text-center text-20">© 2024 BTC Beta All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrap {
  padding: 62rem 160rem 81rem;
  color: #fff;
  background-color: #161616;

  .footer-item-text {
    font-size: 20rem;
    &:not(:first-child) {
      margin-top: 36rem;
    }
  }
}
</style>
