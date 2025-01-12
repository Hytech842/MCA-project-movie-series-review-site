const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API;

async function fetchFromAPI(endpoint) {
  const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export default fetchFromAPI;