import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
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
        config.url === "api/login" &&
        (status === 406 || status === 404)
      ) {
        throw new Error(data);
      } else if (config.url.includes("api/login") && status === 401) {
        throw new Error(error + " " + error.response.data.id);
      }

      
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;