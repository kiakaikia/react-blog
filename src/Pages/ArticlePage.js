import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticleList from '../Components/ArticleList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../Components/CommentsList';
import UpvoteSection from '../Components/upvoteSection';
import AddCommentForm from '../Components/AddCommentForm';

const ArticlesPage = () => {
    const { name } = useParams();
    
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            //make sure the server and mongoDB is running
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);


    //unavailable article pages
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage />

    const otherArticle = articleContent.filter(article => article.name !== name);
    return (
    <>
    <h1>{article.title}</h1>
    <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <h2> Other Articles:</h2>
    <ArticleList articles={otherArticle} />
    </>
    )
};

export default ArticlesPage;