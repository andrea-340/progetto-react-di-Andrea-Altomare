import axios from "axios";

const apiKey = "2AeCG5EvH9bqHPhs9XYJbc4kd06GEeSq";

const apiClient = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
  timeout: 5000,
});

export const fetchArticlesAPI = (query) =>
  apiClient.get("articlesearch.json", {
    params: { q: query, "api-key": apiKey },
  });

export const fetchArticleByIdAPI = (id) =>
  apiClient.get("articlesearch.json", {
    params: { fq: `_id:"${id}"`, "api-key": apiKey },
  });

export default apiClient;
