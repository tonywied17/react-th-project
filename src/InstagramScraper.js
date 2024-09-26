import axios from 'axios';

export async function fetchInstagramMedia(username) {
  try {
    const response = await axios.get(`http://localhost:5000/api/instagram/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    throw error;
  }
}
