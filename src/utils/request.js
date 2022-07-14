import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
//响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  //请求失败
  (error) => {
    ElMessage.error(message);
    return Promise.reject(new Error(message));
  }
);
export default service;
