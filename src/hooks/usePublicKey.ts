import { useAppStore } from '@store/appStore';
const usePublicKey = () => {
    const appStore = useAppStore();
    return async() => {
        if(!appStore.defaultAccount){
            return [new Error('Please connect wallet first'),null]
        }
        if (appStore.wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getPublicKey();
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
        if (appStore.wallet === 'UNISAT') {
            try {
                let res = await window.unisat.getPublicKey();
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
    }
}
export default usePublicKey