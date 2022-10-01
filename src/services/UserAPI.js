import LocalStorageKey from "../constant/LocalStorageKey";
import AxiosClient from "./AxiosClient";

const accessToken = "Bearer " + localStorage.getItem(LocalStorageKey.TOKEN);
const UserApi = {
  login(data) {
    console.log(data)
    const url = "api/users/login";
    const promise = AxiosClient.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    var dataPromise = promise.then((respone) => respone);
    console.log(dataPromise)
    return dataPromise;
  },
};

export default UserApi;