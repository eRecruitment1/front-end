import AxiosClient from "./AxiosClient";
import EndPoints from "../constant/EndPoints";
const UserApi = {
  login(data) {
    console.log(data)
    const url = EndPoints.LOGIN_END_POINT;
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