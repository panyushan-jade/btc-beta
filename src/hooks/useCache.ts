import { useAppStore } from '@store/appStore';
const useCache = async () => {
    const appStore = useAppStore();
    if (appStore.defaultAccount && appStore.wallet) {
        if (appStore.wallet === 'OKX') {
            let res = await window.okxwallet.bitcoin.getAccounts();
            if (appStore.defaultAccount === res[0]) {
                return
            }
        }
        if (appStore.wallet === 'UNISAT') {
            let res = await window.unisat.getAccounts();
            if (appStore.defaultAccount === res[0]) {
                return
            }
            return
        }
        appStore.setAccount('')
        appStore.setWallet('')
        appStore.setToken('')

    }
}
export default useCache;