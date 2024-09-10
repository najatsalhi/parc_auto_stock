
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ArticleManagement.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    departement: '',
    etat: '',
    date_stockage: '',
    id_stock: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
  }, []);

  const fetchArticles = () => {
    axios.get('http://localhost:3001/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  };

  const validation = (data) => {
    let errors = {};
    
    if (!data.nom) errors.nom = "Nom is required";
    if (!data.description) errors.description = "Description is required";
    if (!data.departement) errors.departement = "Département is required";
    if (!data.etat) errors.etat = "État is required";
    if (!data.date_stockage) errors.date_stockage = "Date de Stockage is required";
    if (!data.id_stock) errors.id_stock = "ID Stock is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(formData);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      axios
        .post("http://localhost:3001/articles", formData) // Update to lowercase
        .then((res) => {
          alert("Article added successfully");
          fetchArticles();  // Refresh the list after successful addition
          setFormData({
            nom: '',
            description: '',
            departement: '',
            etat: '',
            date_stockage: '',
            id_stock: ''
          });
        })
        .catch((err) => console.log("Error:", err));  // Log any error
    }
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
            {errors.nom && <p className="error">{errors.nom}</p>}
          </label>
          <label>
            Description:
            <input
              type="text"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              required
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </label>
          <label>
            Département:
            <input
              type="text"
              value={formData.departement}
              onChange={e => setFormData({ ...formData, departement: e.target.value })}
              required
            />
            {errors.departement && <p className="error">{errors.departement}</p>}
          </label>
          <label>
            État:
            <input
              type="text"
              value={formData.etat}
              onChange={e => setFormData({ ...formData, etat: e.target.value })}
              required
            />
            {errors.etat && <p className="error">{errors.etat}</p>}
          </label>
          <label>
            Date de Stockage:
            <input
              type="date"
              value={formData.date_stockage}
              onChange={e => setFormData({ ...formData, date_stockage: e.target.value })}
              required
            />
            {errors.date_stockage && <p className="error">{errors.date_stockage}</p>}
          </label>
          <label>
            ID Stock:
            <input
              type="text"
              value={formData.id_stock}
              onChange={e => setFormData({ ...formData, id_stock: e.target.value })}
              required
            />
            {errors.id_stock && <p className="error">{errors.id_stock}</p>}
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

export default Articles;
