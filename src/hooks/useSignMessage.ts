import { useAppStore } from '@store/appStore';
const useSignMessage = () => {
    // const appStore = useAppStore();
    const signMessage = async (address: string, wallet : string, message: string) => {
        if(!address){
            return [new Error('Please connect wallet'),null]
        }
        if (wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.signMessage(message);
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
        if (wallet === 'UNISAT') {
            try {
                let res = await window.unisat.signMessage(message);
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
    }
    return signMessage;
}
export default useSignMessage;