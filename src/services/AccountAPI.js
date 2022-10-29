import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const AccountAPI = {
    getAccountByID(accountID) {
        const url = 'api/account/'+accountID;
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
    getEmpAccount() {
        const url = '/api/account/getRoleEmployee';
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
}

export default AccountAPI