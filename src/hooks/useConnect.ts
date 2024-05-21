import { useAppStore } from '@store/appStore';
import { ElMessage } from "element-plus";
import usePublicKey from "@/hooks/usePublicKey";
import useSignMessage from "@/hooks/useSignMessage";
import { $POST } from '@/service/request';
const walletTypeMap = {
    'OKX': 1,
    'UNISAT': 2
}
const useConnect = () => {
    const signMessage = useSignMessage();
    const getPublicKey = usePublicKey();
    const appStore = useAppStore();
    const JWTLogin = async (address: string, wallet: string) => {
        if (!address) return
        const sign = await signMessage(address, wallet, address)
        console.log(sign, address)
        if (sign[0]) {
            return console.log('签名失败');
        }
        const publicKey = await getPublicKey(address, wallet)
        console.log(publicKey);
        if (publicKey && publicKey[0]) {
            return console.log('获取公钥失败');
        }
        await $POST('/login', {
            address,
            publicKey: publicKey[1],
            walletType: walletTypeMap[wallet],
            hash: address,
            // signatureHash: 'adminhucdhcd',
            signatureHash: sign[1]
        }).then((res: any) => {
            console.log(res);
            if (res.code === 1) {
                appStore.setAccount(address)
                appStore.setWallet(wallet)
                appStore.setToken(res.data)
                
            }
        })
    }
    window.okxwallet.bitcoin.on('accountsChanged', async(accounts) => {
        if(appStore.wallet === 'OKX'){
            appStore.setAccount('')
            appStore.setWallet('')
            appStore.setToken('')
            if (accounts[0]) {
                JWTLogin(accounts[0], 'OKX')
            }
        }
    });
    window.unisat.on('accountsChanged', async(accounts) => {
        if(appStore.wallet === 'UNISAT'){
            appStore.setAccount('')
            appStore.setWallet('')
            appStore.setToken('')
            if (accounts[0]) {
                JWTLogin(accounts[0], 'UNISAT')
            }
        }
    });
    const connected = async (wallet: 'OKX' | 'UNISAT', callback?: Function, notInstallCallback?: Function) => {

        if (wallet === 'OKX') {
            const ua = navigator.userAgent;
            const isIOS = /iphone|ipad|ipod|ios/i.test(ua);
            const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua);
            const isMobile = isIOS || isAndroid;
            const isOKApp = /OKApp/i.test(ua);
            if (isMobile && !isOKApp) {
                return window.open('okx://wallet/dapp/details')
            }
            if (typeof window.okxwallet !== 'undefined') {
                try {
                    const result = await window.okxwallet.bitcoin.connect()
                    if (result.address) {
                        JWTLogin(result.address, 'OKX').then(() => {
                            callback && callback(result.address)
                        })
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
                        JWTLogin(accounts[0], 'UNISAT').then(() => {
                            callback && callback(accounts[0])
                        })
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