import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

/**
 * 跳转
 */
export const useLaunchTo = () => {
  const router = useRouter();

  function launchTo(item: { link?: string; urlName?: string }) {
    // 外链跳转
    if (item.link) {
      window.open(item.link);
      return;
    }

    if (item.urlName === '' || item.urlName === '/') {
      ElMessage({
        type: 'info',
        message: 'Coming soon',
      });
      return;
    }

    // 组件跳转
    if (item.urlName !== '/') {
      router.push({ name: item.urlName });
    }
  }

  return {
    launchTo,
  };
};
