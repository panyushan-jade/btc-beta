import { useAppStore } from '@store/appStore';
const usePublicKey = () => {
    const appStore = useAppStore();
    return async( address, wallet) => {
        if(!address){
            return [new Error('Please connect wallet first'),null]
        }
        if (wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getPublicKey();
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
        if (wallet === 'UNISAT') {
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