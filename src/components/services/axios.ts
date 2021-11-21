import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.gibicoski.com.br/',
});
export default api;
