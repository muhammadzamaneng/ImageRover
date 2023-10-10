import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '39918450-61e35a657aaced7133a47e3c3';

export const fetchImages = async (query: string): Promise<any> => {
  try {
    const res = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}`,
    );

    if (res?.data?.hits) {
      return res.data.hits;
    }
  } catch (error) {
    console.log('Error fetching images:', error);
    throw error;
  }
};
