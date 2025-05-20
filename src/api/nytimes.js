// src/api/nytimes.js
import axios from "axios";

const API_KEY = "2AeCG5EvH9bqHPhs9XYJbc4kd06GEeSq";

export async function fetchTopStories(section = "home") {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json`,
      {
        params: { "api-key": API_KEY },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Errore fetchTopStories:", error);
    throw error;
  }
}
