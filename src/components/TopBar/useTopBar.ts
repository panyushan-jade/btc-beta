import i18n from '@/locales/i18n';
import { useAppStore } from '@/store/appStore';
import { reactive, readonly } from 'vue';
import { useLaunchTo } from '@/hooks/useLaunchTo';

export interface IMemu {
  id: number;
  name: string;
  logo: any;
  urlName: string;
  active: boolean;
  children?: IMemu[];
  link?: string;
}

// 菜单列表
const menuListValue = reactive<IMemu[]>([
  {
    id: 1,
    name: 'Participate',
    logo: require('@img/holder.png'),
    urlName: '',
    active: false,
    children: [
      {
        id: 1,
        name: 'Projects',
        logo: require('@img/holder.png'),
        urlName: 'Projects',
        active: false,
      },
      {
        id: 2,
        name: 'Quests',
        logo: require('@img/holder.png'),
        urlName: '',
        active: false,
      },
      {
        id: 3,
        name: 'Portfolio',
        logo: require('@img/holder.png'),
        urlName: '',
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: 'BRC-202',
    logo: require('@img/holder.png'),
    urlName: '',
    active: false,
  },
  {
    id: 3,
    name: 'Beta Bunnies',
    logo: require('@img/holder.png'),
    urlName: 'BetaBunnies',
    active: false,
    children: [
      {
        id: 1,
        name: 'INTRODUCTION',
        logo: require('@img/holder.png'),
        urlName: 'Introduction',
        active: false,
      },
      {
        id: 2,
        name: 'VALIDATOR REWARD',
        logo: require('@img/holder.png'),
        urlName: 'Application',
        // urlName: '',
        active: false,
      },
      {
        id: 3,
        name: 'COMMUNITY REWARD',
        logo: require('@img/holder.png'),
        urlName: 'Community',
        // urlName: '',
        active: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Lock PLATFORM TOKEN',
    logo: require('@img/holder.png'),
    urlName: '',
    active: false,
  },
  {
    id: 6,
    name: 'Launch with BTC Beta',
    logo: require('@img/holder.png'),
    urlName: '',
    active: false,
  },
]);

/**
 * 修改菜单
 * @param menuItem 菜单项
 */
export function setMenuList(menuItem) {
  menuListValue.forEach((item) => {
    if (menuItem.id === item.id) {
      item = menuItem;
    }
  });
}

export const useTopBar = () => {
  const { launchTo } = useLaunchTo();
  const appStore = useAppStore();
  const router = useRouter();
  const $t = i18n.global.t;

  const gThis = getCurrentInstance().appContext.config.globalProperties;

  const loadLink = ref(false);
  /**
   * 连接钱包
   */
  async function handleLink() {
    if (loadLink.value) return;
    loadLink.value = true;
    await appStore.linkWallet();
    loadLink.value = false;
  }

  // 语言栏
  const langList = reactive([
    {
      id: 1,
      name: '中文',
      target: 'cn',
      active: true,
    },
    {
      id: 2,
      name: 'English',
      target: 'en',
      active: false,
    },
  ]);

  // 当前选中语言
  const curLang = computed(() => langList.find((item) => item.target === appStore.curLang).name);

  /**
   * 选择语言
   */
  function pickLang(lang) {
    gThis.$i18n.locale = lang.target;
    appStore.setLang(lang.target);
    langList.forEach((item) => {
      item.active = lang.id === item.id;
    });
  }

  return {
    langList,
    curLang,
    loadLink,
    pickLang,
    launchTo,
    handleLink,
  };
};

export const menuList = readonly(menuListValue);
