import axios from "axios";



console.log('process.env.VUE_APP_API_URL',process.env.VUE_APP_API_URL);

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {},
});

export default instance;