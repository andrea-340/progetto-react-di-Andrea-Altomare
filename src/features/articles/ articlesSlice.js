import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticlesAPI } from "../../api/apiClient";
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (query, thunkAPI) => {
    try {
      const response = await fetchArticlesAPI(query);
      const data = response.data;
      return (
        data.response?.docs?.map((doc) => ({
          id: doc._id,
          title: doc.headline?.main ?? "Nessun titolo trovato",
          url: doc.web_url,
          multimedia: doc.multimedia ?? [],
          snippet: doc.snippet ?? "",
        })) || []
      );
    } catch (error) {
      // Se l'errore contiene response e message, passa quello
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Errore nella ricerca articoli.";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    query: "",
    articles: [],
    loading: false,
    error: null,
    selectedArticle: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSelectedArticle(state, action) {
      state.selectedArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Errore durante il recupero dei dati.";
      });
  },
});

export const { setQuery, setSelectedArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
