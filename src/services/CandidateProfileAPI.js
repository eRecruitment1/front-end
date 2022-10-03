import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);

const CandidateProfileAPI = {
    getProfile() {
        const url = "api/profile/get";
        console.log( accessToken )
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        })
    }
}

export default CandidateProfileAPI