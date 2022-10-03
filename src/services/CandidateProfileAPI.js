import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);

const CandidateProfileAPI = {
    getProfile() {
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Account/"+JSON.parse(localStorage.getItem(LocalStorageKey.USER)).id;
        // const url = 'api/profile/get'
        return AxiosClient.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                Authorization: accessToken,
            },
        })
    },
    updateProfile(data) {
        console.log(data)
        const url = "https://633a54d8e02b9b64c60e8d4e.mockapi.io/Account/" + data?.id;
        // const url = 'api/profile/get'
        return AxiosClient.put(url, data , {
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                // Authorization: accessToken,
            },
        })
    }
}

export default CandidateProfileAPI