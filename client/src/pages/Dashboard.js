// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Assurez-vous de créer ce fichier pour le style

const Dashboard = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    totalArticles: 0,
    totalRepairs: 0,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/dashboard');
        setData(response.data);
      } catch (err) {
        console.error('Erreur lors de la récupération des données du tableau de bord', err);
        setError('Erreur lors de la récupération des données.');
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Tableau de Bord</h1>
      {error && <p className="error">{error}</p>}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>Total Utilisateurs</h2>
          <p>{data.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h2>Total Articles</h2>
          <p>{data.totalArticles}</p>
        </div>
        <div className="stat-card">
          <h2>Total Réparations</h2>
          <p>{data.totalRepairs}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
