import { ref, watch } from 'vue';
import { useAppStore } from '@store/appStore';
const useInscriptions = () => {
    const appStore = useAppStore();
    const Inscriptions = ref([])
    const getInscriptions = async () => {
        if (appStore.wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getInscriptions(0, 20);
                console.log(res)
                return res.list
            } catch (e) {
                console.log(e);
            }
            return
        }
        if (appStore.wallet === 'UNISAT') {
            try {
                let res = await window.unisat.getInscriptions(0, 10);
                console.log(res)
                return res.list
            } catch (e) {
                console.log(e);
            }
        }
    }
    watch(() => appStore.defaultAccount, async(newValue, oldValue) => {
        Inscriptions.value = []
        if (newValue) {
            Inscriptions.value = await getInscriptions()
        }
    })
    return [Inscriptions, getInscriptions]
}
export default useInscriptions;