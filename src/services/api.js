import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1f61c5c3e341d3551f825cc6aeed2125';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const MovieAPI = async (url = '', query = '') => {
  const config = {
    params: {
      query: query,
    },
  };
  const response = await axios.get(`${BASE_URL}${url}`, config);
  return response.data;
};
