import { ref, watch } from 'vue';
import { useAppStore } from '@store/appStore';
const useInscriptions = () => {
    const appStore = useAppStore();
    const Inscriptions = ref([])
    const getInscriptions = async (start=0) => {
        if(start === 0){
            Inscriptions.value = []
        }
        if (appStore.wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getInscriptions(start, start + 199);
                if(res.total > 199){
                    Inscriptions.value.push(...res.list)
                    await getInscriptions(start + 199)
                }else{
                    Inscriptions.value = res.list
                }
                return Inscriptions.value
            } catch (e) {
                console.log(e);
            }
            return
        }
        if (appStore.wallet === 'UNISAT') {
            try {
                let res = await window.unisat.getInscriptions(0, 20);
                if (res) {
                    Inscriptions.value = res.list
                }
                return res.list
            } catch (e) {
                console.log(e);
            }
        }
    }
    watch(() => appStore.defaultAccount, async(newValue, oldValue) => {
        if (newValue) {
            getInscriptions()
        }
    })
    return {
        Inscriptions, getInscriptions
    }
}
export default useInscriptions;