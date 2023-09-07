import React, { useEffect } from 'react';
import './newsItem.css';
import WebFont from 'webfontloader';

const NewsItem = ({ title, description, url, urlToImage, publishedAt }) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto:400,700'] 
            }
        });
    }, []);

    // Функция для форматирования даты и времени
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <div className="news-app">
            <a href={url} className="news-item-link" target="_blank" rel="noreferrer noopener">
                <div className="news-item">
                    <img className="news-img" src={urlToImage}  />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p className="news-date">{formatDate(publishedAt)}</p>
                </div>
            </a>
        </div>
    );
};

export default NewsItem;
