import AxiosClient from "./AxiosClient";
import { LOGIN_GOOGLE_END_POINT , LOGIN_END_POINT } from "../constant/EndPoints";
import LocalStorageKey from "../constant/LocalStorageKey";
const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);

const UserApi = {
  login(data) {
    console.log(data)
    const url = LOGIN_END_POINT;
    const promise = AxiosClient.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    var dataPromise = promise.then((respone) => respone);
    return dataPromise;
  },
  
};

export default UserApi;