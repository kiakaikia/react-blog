import React from 'react';
import "./App.css"
import HomePage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage'
import ArticlesListPage from './Pages/ArticleListPage';
import ArticlesPage from './Pages/ArticlePage';
import NavBar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';


export function App() {
  return(
    <BrowserRouter>
    <NavBar />
    <div id="page-body">
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/articles-list" element={<ArticlesListPage />} />
      <Route path="/articles/:name" element={<ArticlesPage />} />
      {/* paths that don't exist */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
  </BrowserRouter>
  )
}
