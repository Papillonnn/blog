//使用axios 请求数据
import axios from "axios"
//配置基础路径
axios.defaults.baseURL="http://localhost:3000";
axios.interceptors.response.use((res)=>res.data);
//个人信息
export let getProfileData=()=>{
  return axios.get("/api/profile");
};
// 博客内容
export let getPostData=(index)=>{
  return axios.get("/api/post", {
  	params: {
  		page: 1,
  		num: -1
  	}
  });
};
// archives
export let getArchivesData=()=>{
  return axios.get("/api/archives",{
  	params: {
  		page: 1,
  		num: -1
  	}
  });
};
// recent
export let getRecentData=()=>{
  return axios.get("/api/recent");
};

