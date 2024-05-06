import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import { useAppStore } from '@/store/appStore';
import { handleSwitchChain } from './routerHelp';
import { curNeedChain } from '@/contracts/chains';
import { getEnv } from '@/utils/buildTestnet';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
    meta: {
      requireAccount: true,
      needChains: curNeedChain(['bsc']), // 依赖的链
      needTips: true, // 链不对的时候，需不需要提示
    },
  },

  {
    path: '/beta-bunnies',
    name: 'BetaBunnies',
    component: () => import(/* webpackChunkName: "betaBunnies" */ '@/views/BetaBunnies/index.vue'),
    meta: {
      requireAccount: true,
      needChains: curNeedChain(['bsc']), // 依赖的链
      needTips: true, // 链不对的时候，需不需要提示
    },
    children:[
      {
        path: 'Vote',
        name: 'Vote',
        component: () => import(/* webpackChunkName: "Vote" */ '@/views/BetaBunnies/Vote/index.vue'),
      },
      {
        path: 'Community',
        name: 'Community',
        component: () => import(/* webpackChunkName: "Community" */ '@/views/BetaBunnies/Community/index.vue'),
      },
      {
        path: 'Application',
        name: 'Application',
        component: () => import(/* webpackChunkName: "Application" */ '@/views/BetaBunnies/Application/index.vue'),
      },
      {
        path: 'Introduction',
        name: 'Introduction',
        component: () => import(/* webpackChunkName: "Introduction" */ '@/views/BetaBunnies/Introduction/index.vue'),
      },

    ]
  },

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue'),
    meta: {
      requireAccount: true,
      needChains: curNeedChain(['bsc']), // 依赖的链
      needTips: true, // 链不对的时候，需不需要提示
    },
  },
];

const env = getEnv(import.meta.env.MODE);
const router = createRouter({
  history: createWebHistory(env.routerBase),
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // 每次进来，先拿一下钱包
    // const appStore = useAppStore();
    // appStore.linkWallet().then(() => {
    //   handleSwitchChain();
    //   appStore.setNetWorkReady(true);
    // });

    if (to.matched.length === 0) {
      //如果未匹配到路由
      from.path ? next({ path: from.path }) : next('/'); //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
    } else {
      next(); //如果匹配到正确跳转
    }
  }
);

export default router;
