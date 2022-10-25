import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const CvAPI = {
    viewSchedule() {
        const url = 'api/schedule/view'
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        });
    },
}

export default CvAPI