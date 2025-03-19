import axios from "axios";

const ACCESS_KEY = "b_CJbKH7Aq5qShy9YPJqzzmudGtPruzafs9oRbUE0VU";

axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

type ApiResponse = {
  results: Array<{
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  }>;
};

export const fetchRequest = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
  );
  return response.data;
};
