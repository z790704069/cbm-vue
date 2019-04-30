import axios from 'axios'; 

// 参数封装
const searchParam = params => {
  let searchParam = new FormData();
  for (let key in params) {
    if (Array.isArray(params[key])) {
      searchParam.append(key, JSON.stringify(params[key]));
    } else {
      searchParam.append(key, params[key]);
    }
  }
  return searchParam;
};

// 推荐接口-get请求
const axiosGetResponse = (url, param = null) => {
  if (param === null) param = {};
  return axios.get(url, {
    params: param
  }).then(res => {
    return res.data;
  }).catch(error => {
    return error;
  });
};

// 推荐接口-post请求
const axiosPostResponse = (url, param = null) => {
  if (param === null) param = {}
  return axios({
    method: 'post',
    url: url,
    withCredentials: true,
    data: searchParam(param)
  }).then(res => {
    return res.data;
  }).catch(error => {
    return error;
  });
};


export default {
  install(Vue) {
    Vue.prototype.$axiosGet = axiosGetResponse; // 推荐接口-get请求
    Vue.prototype.$axiosPost = axiosPostResponse; // 推荐接口-post请求
  }
};
