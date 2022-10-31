import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
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
      if ((status === 403 || status === 401) && config.url === "api/users/login"){
        localStorage.removeItem(LocalStorageKey.USER)
        localStorage.removeItem(LocalStorageKey.TOKEN)
        window.alert("Your Account is expired!!!");
      }
      if (status === 409 && config.url.includes("api/userCV/upload")){
        window.alert("You have uploaded already!!!");
        navigate('/cv-tracking')
      }
      if ((status === 400 || status === 403) && config.url === ("api/schedule/create")){
        window.alert("CV is scheduled before");
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosClient;