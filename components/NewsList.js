import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import SearchBar from './SearchBar';
require('dotenv').config({ path: '../../.env' });

const NewsList = ({ category, last24Hours }) => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('us');

  useEffect(() => {
    const getArticles = async () => {
      const fromDate = last24Hours ? `&from=${new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()}` : '';
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&q=${searchTerm}&apiKey=9a2fbbf119dc4072884c6bf068177de4${fromDate}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, [category, last24Hours, searchTerm, language]);

  const handleSearch = (term, lang) => {
    setSearchTerm(term);
    setLanguage(lang);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {articles.map((article) => {
        return (
          <NewsItem
            key={article.url} // Добавьте ключ для улучшения производительности
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
