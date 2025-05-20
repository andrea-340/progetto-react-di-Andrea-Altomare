import React, { useEffect, useState } from "react";
import { fetchTopStories } from "../api/nytimes";
import Carosello from "./Carosell";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await fetchTopStories("home");
        setArticles(data);
      } catch (err) {
        setError("Errore nel caricamento degli articoli.");
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>New York Times Articles</h2>
      <Carosello articles={articles} />
      {}
    </div>
  );
}

export default HomePage;
