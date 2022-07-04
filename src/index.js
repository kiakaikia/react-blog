import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import AboutPage from './Pages/AboutPage'
import ArticlesList from './Pages/ArticlesList';
import ArticlesPage from './Pages/ArticlePage';
import NavBar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <div id="page-body">
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/articles-list" element={<ArticlesList />} />
      <Route path="/article/:name" element={<ArticlesPage />} />
    </Routes>
    </div>
  </BrowserRouter>
);