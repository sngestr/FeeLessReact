//Navigation for all pages expect the homepage
import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/PageNavigation.css';

const PageNavigation = () => {
  return (
    <div id="page_nav">
      <Link to='/'>FeeLess</Link>
    </div>
  );
}

export default PageNavigation;
