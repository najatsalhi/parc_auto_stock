import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaClipboardList, FaChartBar, FaTools } from 'react-icons/fa';
import './sidebar.css';

const sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        <Link to="/dashboard" className="sidebar-link">
          <FaTachometerAlt className="sidebar-icon" />
          Dashboard
        </Link>
      </h2>
      <nav>
        <dl>
          <dd className="sidebar-item">
            <Link to="/users" className="sidebar-link">
              <FaUsers className="sidebar-icon" />
              User Management
            </Link>
          </dd>
          <dd className="sidebar-item">
            <Link to="/Articles" className="sidebar-link">
              <FaClipboardList className="sidebar-icon" />
              Article Management
            </Link>
          </dd>
          <dd className="sidebar-item">
            <Link to="/Reports" className="sidebar-link">
              <FaChartBar className="sidebar-icon" />
              Reports
            </Link>
          </dd>
          <dd className="sidebar-item">
            <Link to="/Repairs" className="sidebar-link">
              <FaTools className="sidebar-icon" />
              Repairs
            </Link>
          </dd>
        </dl>
      </nav>
    </div>
  );
};

export default sidebar;