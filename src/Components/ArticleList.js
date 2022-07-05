import React from 'react';
import {Link} from 'react-router-dom';

const ArticleList = ({ articles }) => {
    return (
        <>
        {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            {/* shows the first 150 char of article + ... */}
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
        </>
    );
}

export default ArticleList;
