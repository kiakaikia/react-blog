import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArticlesPage = () => {
    const { name } = useParams();
    return (
    <>
    <h1>This is {name} articles</h1>
    </>
    )
};

export default ArticlesPage;