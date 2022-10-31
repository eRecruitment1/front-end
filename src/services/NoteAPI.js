import AxiosClient from "./AxiosClient";
import LocalStorageKey from '../constant/LocalStorageKey'
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const NoteAPI = {
    createNote(data) {
        console.log(data)
        const url = "/api/note/takeNote";
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
    viewAllNote() {
        const url = "/api/note/getAll";
        return AxiosClient.get(url, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
    viewNotesByRound(data) {
        console.log(data)
        const url = "/api/note/get/cvid";
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: accessToken,
            },
        })
    },
}

export default NoteAPI