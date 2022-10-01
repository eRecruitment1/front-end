import AxiosClient from "./AxiosClient";

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
    return dataPromise;
  },
};

export default UserApi;