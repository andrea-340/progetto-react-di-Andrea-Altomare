import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Carosello({ articles }) {
  if (!articles || articles.length === 0) {
    return;
  }

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {articles.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : undefined}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {articles.map((article, idx) => {
          const multimedia = article.multimedia || [];
          const imgUrl =
            multimedia.length > 0
              ? multimedia[0].url.startsWith("http")
                ? multimedia[0].url
                : `https://www.nytimes.com/${multimedia[0].url}`
              : "https://via.placeholder.com/800x400?text=No+Image";

          return (
            <div
              key={article.url || idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              data-bs-interval="3000"
            >
              <img
                src={imgUrl}
                className="d-block w-100"
                alt={article.title || "Immagine news"}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{article.title}</h5>
                <p>{article.abstract}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosello;
