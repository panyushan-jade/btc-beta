import { useAppStore } from '@store/appStore';
import { ElMessage } from "element-plus";
const useConnect = () => {
    const appStore = useAppStore();
    const connected = async (wallet: 'OKX' | 'UNISAT', callback?: Function, notInstallCallback?: Function) => {
        console.log(wallet, callback);

        if (wallet === 'OKX') {
            const ua = navigator.userAgent;
            const isIOS = /iphone|ipad|ipod|ios/i.test(ua);
            const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua);
            const isMobile = isIOS || isAndroid;
            const isOKApp = /OKApp/i.test(ua);
            if (isMobile && !isOKApp) {
                return window.open('okx://wallet/dapp/details?dappUrl=https://www.lont.games')
            }
            if (typeof window.okxwallet !== 'undefined') {
                try {
                    const result = await window.okxwallet.bitcoin.connect()
                    console.log(result)
                    if (result.address) {
                        appStore.setAccount(result.address)
                        appStore.setWallet(wallet)
                        callback && callback(result.address)
                        // window.okxwallet.bitcoin.on('accountChanged', (addressInfo) => {
                        //     setAddress(addressInfo.address)
                        // })
                    }
                } catch (error) {
                    console.log(error)
                    ElMessage.error(error.message)
                    callback && callback(null, error)
                }

            } else {
                notInstallCallback && notInstallCallback()
            }
            return
        }
        if (wallet === 'UNISAT') {
            if (typeof window.unisat !== 'undefined') {
                try {
                    const accounts = await window.unisat.requestAccounts();
                    // let UnisatPubKey = await window.unisat.getPublicKey()
                    if (accounts[0]) {
                        appStore.setAccount(accounts[0])
                        appStore.setWallet(wallet)
                        callback && callback(accounts[0])
                    }
                } catch (error) {
                    console.log(error)
                    ElMessage.error(error.message)
                    callback && callback(null, error)
                }
            } else {
                notInstallCallback && notInstallCallback()
            }
        }
    }
    return {
        Address: appStore.defaultAccount,
        Wallet: appStore.wallet,
        connected
    }
}
export default useConnect;