import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar'; // Adjust the path based on your folder structure

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Use Sidebar component */}
      <div className="content" style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* This will render the matched child route */}
      </div>
    </div>
  );
};

export default Layout;