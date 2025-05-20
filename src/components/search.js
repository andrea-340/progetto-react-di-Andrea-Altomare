import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, setQuery } from "../features/articles/ articlesSlice";
import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const { query, articles, loading, error } = useSelector(
    (state) => state.articles
  );

  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (localQuery.trim() !== query) {
        dispatch(setQuery(localQuery));
        if (localQuery.trim() !== "") {
          dispatch(fetchArticles(localQuery));
        }
      }
    }, 500); // attesa 500ms

    return () => {
      clearTimeout(handler);
    };
  }, [localQuery, dispatch, query]);

  const handleChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim() !== "") {
      dispatch(setQuery(localQuery));
      dispatch(fetchArticles(localQuery));
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={localQuery}
          onChange={handleChange}
          placeholder="Cerca articoli..."
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Cerca
        </button>
      </form>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.id} style={{ marginBottom: "20px" }}>
            <Link
              to={`/article/${encodeURIComponent(article.id)}`}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <h3 style={{ fontSize: "20px", margin: 0 }}>{article.title}</h3>
              {article.snippet && (
                <p style={{ fontSize: "14px", color: "gray" }}>
                  {article.snippet}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
