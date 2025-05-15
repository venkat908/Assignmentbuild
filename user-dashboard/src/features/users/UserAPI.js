import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const addUser = async () => {
  const response = await axios.post(`${BASE_URL}/posts`, userData);
  return response.data;
};
