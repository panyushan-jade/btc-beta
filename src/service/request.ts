import { IAxiosResp } from '@/hooks/useAjax';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useAppStore } from '@/store/appStore'

const defaultConfig = {
  baseURL: 'https://btcbeta.org/serverapi/', // 写/api作为标记就好
};
Object.assign(axios.defaults, defaultConfig);
axios.defaults.headers['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const appStore = useAppStore();
    config.headers.token = appStore.token
    console.log(config.headers);
    
    // 在发送请求之前做些什么
    /* const uid = localMemory.getItem('uid') || ''

    const params = { 
      uid,
    } */

    /* if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...params,
      };
    } else {
      config.data = {
        ...config.data,
        ...params,
      };
    } */
    return config;
  },
  (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (resp) => {
    /* return {
      ...resp.data,
      success: resp.status === 200,
    }; */

    return resp.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;

export const $POST = <T>(url: string, payload: object): Promise<IAxiosResp<T>> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, payload)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const $GET = <T>(url: string, payload?: object): Promise<IAxiosResp<T>> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: payload,
      })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
