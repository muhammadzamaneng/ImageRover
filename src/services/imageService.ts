import axios from 'axios';

import {config} from '../../config';

const API_URL = config.PIXABAY_API_URL;
const API_KEY = config.PIXABAY_API_KEY;

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
