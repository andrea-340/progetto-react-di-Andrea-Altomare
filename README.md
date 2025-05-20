# progetto-react-di-Andrea-Altomare NyT
---
# New York Times React App
<img width="670" alt="home" src="https://github.com/user-attachments/assets/30c2d6fc-8da2-44e5-bc46-14dba477dcce" />
<img width="1470" alt="home" src="https://github.com/user-attachments/assets/308b9e83-4f01-4080-8584-9aa3ae0bc690" />

## Descrizione
---
Questa è una web app React che consente di cercare e visualizzare articoli del New York Times tramite la loro API ufficiale. L'app include:

* Ricerca di articoli con debounce per ottimizzare le chiamate API.
* Visualizzazione degli articoli principali nella homepage.
* Navigazione tra le pagine con React Router.
* Gestione dello stato globale con Redux Toolkit.
* Interfaccia responsive basata su Bootstrap 5.
* Carosello di articoli in homepage.
* e registrazione dell'utente

---

## Funzionalità principali

* **Ricerca dinamica** con debounce di 500ms per ridurre le richieste API.
* **Visualizzazione dettagliata** di ogni articolo tramite pagina dedicata.
* **Carosello** per scorrere tra i principali articoli del giorno.
* **Navbar** responsive con menu offcanvas.
* **Gestione degli errori** e stato di caricamento visibili all’utente.
* **Deployment** pronto per Netlify con configurazioni corrette di redirect.

---

## Tecnologie usate

* React 18
* React Router DOM
* Redux Toolkit
* Bootstrap 5
* API New York Times
* Netlify (per hosting e deployment)

---

## Installazione

1. Clona il repository:

```
scarica il file zip ed esegui i comandi bash
git clone("https://github.com/andrea-340/progetto-react-completo-di-Andrea-Altomare.git") 
```

2. Installa le dipendenze:

```bash
npm install
```

4. Avvia l’app in locale:

```bash
npm start
```

L’app sarà disponibile su [http://localhost:3000](http://localhost:3000)

---

## Struttura del progetto

```
/src
  /api
    nytimes.js             # Funzioni per chiamate API NYT
  /components
    Navbar.js              # Barra di navigazione
    Carosello.js           # Componente carosello articoli
    Search.js              # Componente ricerca articoli
    HomePage.js            # Pagina principale con top stories
    ArticlePage.js         # Pagina dettaglio articolo
  /features
    /articles
      articlesSlice.js     # Slice Redux per gestione articoli e query
  App.js                   # Setup router e struttura app
  index.js                 # Entry point React
/netlify
  _redirects                # Configurazione redirect Netlify
```

---

## Deployment su Netlify

[Netlify]("https://ny-times-clone.netlify.app")


## Come usare l’app

* Usa la barra di ricerca per trovare articoli con parole chiave.
* Visualizza i risultati con titolo e snippet.
* Clicca su un articolo per vedere il dettaglio completo.
* Naviga facilmente con il menu hamburger in alto.
* Scorri il carosello per vedere i top stories del giorno.
* E registrati tramite i tre trattini all'angolo

---

## Licenza

MIT License © 2025 Andrea Altomare

---
