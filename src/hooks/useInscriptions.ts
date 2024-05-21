import { ref, watch } from 'vue';
import { useAppStore } from '@store/appStore';
const useInscriptions = () => {
    const appStore = useAppStore();
    const Inscriptions = ref([])
    const getInscriptions = async () => {
        if (appStore.wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getInscriptions(0,2);
                console.log(res.total);
                
                if(res.total > 2){
                    Inscriptions.value.push(...res.list)
                    let PromiseArr = []
                    for(let i = 1; i <= res.total /2; i+=1){
                        console.log(i,i + 2);
                        
                        PromiseArr.push(window.okxwallet.bitcoin.getInscriptions(i*2, 2))
                    }
                    Promise.all(PromiseArr).then(resArr => resArr.map(item=> Inscriptions.value.push(...item.list)));
                    
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