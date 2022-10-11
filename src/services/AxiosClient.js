import axios from "axios";
import LocalStorageKey from "../constant/LocalStorageKey";

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

AxiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("Error Response: ", error.response);
    if (error.response !== undefined) {
      const { config, status, data } = error.response;
      if (
        config.url === "api/users/login" &&
        (status === 406 || status === 404)
      ) {
        throw new Error(data);
      } else if (config.url.includes("api/users/login") && status === 401) {
        throw new Error(error + " " + error.response.data.id);
      }
      if (status === 403 || status === 401){
        localStorage.removeItem(LocalStorageKey.USER)
        localStorage.removeItem(LocalStorageKey.TOKEN)
        window.alert("Your Account is expired!!!");
      }
      
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;