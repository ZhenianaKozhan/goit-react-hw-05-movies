import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1f61c5c3e341d3551f825cc6aeed2125';

export const MovieAPI = (url, param) => {
  return axios
    .get(`${BASE_URL}${url}?api_key=${API_KEY}&query=${param}`)
    .then(res => res.data);
};
