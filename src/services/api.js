import axios from "axios";

const ACCESS_KEY = "b_CJbKH7Aq5qShy9YPJqzzmudGtPruzafs9oRbUE0VU";

axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const fetchRequest = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
  );
  return response.data;
};
