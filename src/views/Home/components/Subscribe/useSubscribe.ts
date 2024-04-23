import { ElMessage } from 'element-plus';
import { validEmail, sleep } from '@/utils/tools';

import { usePost } from '@hooks/useAjax';
import { $POST } from '@/service/request';

export const useSubscribe = () => {
  const emailAddr = ref('');
  const loading = ref(false);

  const doSubscribe = async (e) => {
    e.preventDefault();
    if (loading.value) {
      return;
    }
    if (!validEmail(emailAddr.value)) {
      ElMessage.error('Email is illegal');
      return;
    }
    loading.value = true;
    await $POST('/api/email/subscrite', {
      email: emailAddr.value,
    }).catch(() => {
      ElMessage.error('Subscription fail');
    });
    loading.value = false;
    ElMessage.success('Subscription succeeded');
  };

  return {
    emailAddr,
    loading,
    doSubscribe,
  };
};
