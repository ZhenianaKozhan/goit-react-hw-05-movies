import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1f61c5c3e341d3551f825cc6aeed2125';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getCast = async id => {
  try {
    const res = await axios.get(`/movie/${id}/credits`);
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async id => {
  try {
    const res = await axios.get(`/movie/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuery = async query => {
  const config = {
    params: {
      query: query,
      page: 1,
    },
  };

  try {
    const res = await axios.get(`/search/movie`, config);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrending = async () => {
  const res = await axios.get(`/trending/movie/day`);
  return res.data.results;
};

export const getReviews = async id => {
  try {
    const res = await axios.get(`/movie/${id}/reviews`);
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
