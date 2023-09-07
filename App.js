import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TabBar from './components/TabBar';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <TabBar />
        <Routes>
        <Route path="/last24hours" element={<NewsList category="general" last24Hours />} />
          <Route path="/sports" element={<NewsList category="sports" />} />
          <Route path="/politics" element={<NewsList category="business" />} />
          <Route path="/technology" element={<NewsList category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
