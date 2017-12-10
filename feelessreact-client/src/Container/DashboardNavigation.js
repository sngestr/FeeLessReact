// Navigation bar for navigating through the Dashboard pages
import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/Dashboard.css';


const DashboardNavigation = () => {
  return (
    <div id="dash_nav" className="container-fluid">
    	<div className="row">
    		 <span className="col-lg-2 text-center"></span>
    		 <span className="col-lg-2 text-center dash_nav_link">Request</span>
		     <span className="col-lg-2 text-center dash_nav_link">History</span>
		     <span className="col-lg-2 text-center dash_nav_link">Profile</span>
		     <span className="col-lg-2 text-center dash_nav_link">Review</span>
		     <span className="col-lg-2 text-center"></span>
    	</div>
    </div>
  );
}

export default DashboardNavigation;
