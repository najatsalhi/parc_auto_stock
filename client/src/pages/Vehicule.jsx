
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ArticleManagement.css'; // Ensure the CSS file exists and is imported

const Vehicule = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    departement: '',
    etat: '',
    date_stockage: '',
    id_stock: ''
  });

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
  }, []);

  const fetchArticles = () => {
    axios.get('http://localhost:3001/vehicule')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/vehicule', formData)
      .then(() => {
        fetchArticles(); // Refresh article list after adding a new article
        setFormData({
          nom: '',
          description: '',
          departement: '',
          etat: '',
          date_stockage: '',
          id_stock: ''
        });
      })
      .catch(error => console.error('Error adding article:', error));
  };

  return (
    <div className="article-management-container">
      <h1>Article Management</h1>
      <div className="article-management-content">
        <form className="article-form" onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              value={formData.nom}
              onChange={e => setFormData({ ...formData, nom: e.target.value })}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </label>
          <label>
            Département: {/* spell-checker: disable-line */}
            <input
              type="text"
              value={formData.departement}
              onChange={e => setFormData({ ...formData, departement: e.target.value })}
              required
            />
          </label>
          <label>
            État: {/* spell-checker: disable-line */}
            <input
              type="text"
              value={formData.etat}
              onChange={e => setFormData({ ...formData, etat: e.target.value })}
              required
            />
          </label>
          <label>
            Date de Stockage: {/* spell-checker: disable-line */}
            <input
              type="date"
              value={formData.date_stockage}
              onChange={e => setFormData({ ...formData, date_stockage: e.target.value })}
              required
            />
          </label>
          <label>
            ID Stock:
            <input
              type="text"
              value={formData.id_stock}
              onChange={e => setFormData({ ...formData, id_stock: e.target.value })}
              required
            />
          </label>
          <button type="submit">Add Article</button>
        </form>

        <div className="article-list">
          <h2>Article List</h2>
          <table>
            <thead>
              <tr>
                <th>ID Article</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Département</th>
                <th>État</th>
                <th>Date de Stockage</th>
                <th>ID Stock</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article.id_article}>
                  <td>{article.id_article}</td>
                  <td>{article.nom}</td>
                  <td>{article.description}</td>
                  <td>{article.departement}</td>
                  <td>{article.etat}</td>
                  <td>{article.date_stockage}</td>
                  <td>{article.id_stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vehicule;