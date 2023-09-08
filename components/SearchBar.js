import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('us');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, language);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Поиск новостей..."
      /> 
      <select value={language} onChange={handleLanguageChange}>
        <option value="us">English</option>
        <option value="ru">Russian</option>
      </select>
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchBar;