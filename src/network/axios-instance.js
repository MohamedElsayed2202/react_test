import axios from 'axios'
import { setLoader } from '../store/actions/loaderAction';
import store from '../store/store'
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "18ebb55ec02cf2ed6553ddd53661fc5f"
    }
});
axiosInstance.interceptors.request.use(function (config) {
    store.dispatch(setLoader(true));
    console.log("interceptors", config)
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    console.log("interceptors response", response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoader(false));
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });