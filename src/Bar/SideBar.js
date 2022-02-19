import { Link } from "react-router-dom";
import './SideBar.css';
import React,  { useState } from 'react';

function SideBar () {
  const [Activetopright, IsActivetopright] = useState(false);
    return ( 
        <div className="sidebar">
        <Link to="/Dashboard"><div className="Exampallogo"></div></Link>
        <div className="sidebarbg"></div> 
          <div className="topRight" onClick={(e) =>IsActivetopright(!Activetopright)}>
            </div> 
              {Activetopright &&(
                <div className='toprightcontent'>
                  <div className='toprightitem'>Profile</div>
                  <div className='toprightitem'>Account</div>
                  <div className='toprightitem'>English</div>
                  <Link to="/"><div className='toprightitem'>Log out</div></Link>
                </div>
              )}
          <ul>
          <Link to="/Dashboard"><li className="sidebarList0">Dashboard</li></Link>
            <li className="sidebarList1">Result</li>
            <Link to="/Topic"><li className="sidebarList2">Review</li></Link>
            <li className="sidebarList3">Saved Notes</li>
            <li className="sidebarList4">Account Settings</li>
          </ul>
        <Link to="/">
          <div className="Ellipse"></div>
          <div className="ellipsepic0"></div>
          <div className="ellipsepic1"></div>
          <div className="ellipseword">Log out</div>
        </Link>
        </div>
     );
}
 
export default SideBar;