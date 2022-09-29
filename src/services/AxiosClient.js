import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https:localhost:8080",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //De lay data thi thay doi respone chi nhan data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Error Response: ", error.response);
    if (error.response !== undefined) {
      const { config, status, data } = error.response;
      if (
        config.url === "api/auth/login" &&
        (status === 406 || status === 404)
      ) {
        throw new Error(data);
      } else if (config.url.includes("api/auth/login") && status === 401) {
        //Catch banned error and get data
        throw new Error(error + " " + error.response.data.id);
      }

      
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;