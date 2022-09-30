import LocalStorageKey from "../constant_keys/LocalStorageKey";
import AxiosClient from "./AxiosClient";

const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const UserApi = {
  login(data) {
    const url = "api/login";
    const promise = AxiosClient.post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    var dataPromise = promise.then((respone) => respone);
    return dataPromise;
  },
  
};

export default UserApi;