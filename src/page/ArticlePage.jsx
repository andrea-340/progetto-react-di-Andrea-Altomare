import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
          {
            params: {
              fq: `_id:"${id}"`,
              "api-key": "2AeCG5EvH9bqHPhs9XYJbc4kd06GEeSq",
            },
          }
        );
        const docs = response.data.response.docs;
        if (docs.length > 0) {
          setArticle(docs[0]);
          setError(null);
        } else {
          setError("Articolo non trovato.");
        }
      } catch (err) {
        setError("Errore nel caricamento dell'articolo.");
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [id]);

  if (loading)
    return <p style={{ textAlign: "center" }}>Caricamento articolo...</p>;
  if (error)
    return (
      <div style={{ textAlign: "center" }}>
        <p>{error}</p>
        <Link to="/">Torna alla home</Link>
      </div>
    );

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px" }}>
      <h1>{article.headline?.main}</h1>

      {article.multimedia && article.multimedia.length > 0 && (
        <img
          src={`https://www.nytimes.com/${article.multimedia[0].url}`}
          alt={article.headline?.main}
          style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 20 }}
        />
      )}

      {article.snippet && <p>{article.snippet}</p>}

      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        Continua a leggere sul NYTimes
      </a>
    </div>
  );
}

export default ArticlePage;
