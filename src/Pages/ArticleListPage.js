import React from 'react';
import articleContent from './article-content';
import ArticleList from '../Components/ArticleList';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticleList articles={articleContent} />
    </>
);

export default ArticlesListPage;