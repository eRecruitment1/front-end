import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const CvAPI = {
    createCV(data) {
        console.log(data)
        const url = 'api/userCV/upload'
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
    getCV() {
        const url = 'api/userCV/view'
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
    viewCompletedCV() {
        const url = '/api/userCV/getAllCompletedCV'
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
    evaluateCV(data) {
        console.log(data)
        const url = 'api/userCV/evaluate'
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
}

export default CvAPI