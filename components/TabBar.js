import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBar.css';

const TabBar = () => {
  return (
    <div className="tab-bar">
      <NavLink to="/last24hours" className="tab" activeClassName="active-tab">
        <div className="tab-content">Последние 24 часа</div>
      </NavLink>
      <NavLink to="/sports" className="tab" activeClassName="active-tab">
        <div className="tab-content">Спорт</div>
      </NavLink>
      <NavLink to="/politics" className="tab" activeClassName="active-tab">
        <div className="tab-content">Политика</div>
      </NavLink>
      <NavLink to="/technology" className="tab" activeClassName="active-tab">
        <div className="tab-content">Технологии</div>
      </NavLink>
    </div>
  );
};

export default TabBar;
