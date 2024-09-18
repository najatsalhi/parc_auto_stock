import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ArticleManagement.css";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    departement: "",
    etat: "",
    date_stockage: "",
    id_stock: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = articles.filter((user) =>
    `${user.nom} `
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
  }, []);

  const fetchArticles = () => {
    axios
      .get("http://localhost:3001/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:3001/articles", formData) // Update to lowercase
        .then((res) => {
          alert("Article added successfully");
          fetchArticles(); // Refresh the list after successful addition
          setFormData({
            nom: "",
            description: "",
            departement: "",
            etat: "",
            date_stockage: "",
            id_stock: "",
          });
        })
        .catch((err) => console.log("Error:", err)); // Log any error
    
  };

  return (
    <div className="article-management-container">
      <div className="article-management-content">
        <h1>Article Management</h1>
        <form className="article-form" onSubmit={handleSubmit}>
        <div>
            <div>
              <label>ID Stock</label>
            </div>
            <div>
              <input
                type="text"
                value={formData.id_stock}
                onChange={(e) =>
                  setFormData({ ...formData, id_stock: e.target.value })
                }
                required
              />
                  </div>
          </div>
          <div>
            <div>
              <label>Nom:</label>
            </div>
            <div>
              <input
                type="text"
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                required
              />
                          </div>
          </div>
          <div>
            <div>
              <label>Description:</label>
            </div>
            <div>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              
            </div>
          </div>
          <div>
            <div>
              <label>Département:</label>
            </div>
            <div>
              <input
                type="text"
                value={formData.departement}
                onChange={(e) =>
                  setFormData({ ...formData, departement: e.target.value })
                }
                required
              />
              
            </div>
          </div>
          <div>
            <div>
              <label>État:</label>
            </div>
            <div>
              <input
                type="text"
                value={formData.etat}
                onChange={(e) =>
                  setFormData({ ...formData, etat: e.target.value })
                }
                required
              />
             </div>
          </div>
          <div>
            <div>
              <label>Date de Stockage:</label>
            </div>
            <div>
              <input
                type="date"
                value={formData.date_stockage}
                onChange={(e) =>
                  setFormData({ ...formData, date_stockage: e.target.value })
                }
                required
              />
              
            </div>
          </div>
          
          <button type="submit">Add Article</button>
        </form>
      </div>
      <div className="article-list">
        <h2>Article List</h2>
        <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ID article ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: "none" }}
          />
          <span className="search-icon"><FaSearch /></span>
        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>ID Article</th>
              <th>ID Stock</th>
              <th>Nom</th>
              <th>Date de Stockage</th>
              <th>Description</th>
              <th>Département</th>
              <th>État</th>
              
              
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((article) => (
              <tr key={article.id_article}>
                <td>{article.id_article}</td>
                <td>{article.id_stock}</td>
                <td>{article.nom}</td>
                <td>{article.date_stockage}</td>
                <td>{article.description}</td>
                <td>{article.departement}</td>
                <td>{article.etat}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Articles;
