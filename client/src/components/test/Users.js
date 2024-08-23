import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; // Create and import your CSS file
import { FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id_utilisateur: '',
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: '',
    telephone: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(http://localhost:3001/users/${formData.id_utilisateur}, formData)
        .then(() => {
          fetchUsers(); // Refresh user list after updating user
          resetForm();
        })
        .catch(error => console.error('Error updating user:', error));
    } else {
      axios.post('http://localhost:3001/users', formData)
        .then(() => {
          fetchUsers(); // Refresh user list after adding a new user
          resetForm();
        })
        .catch(error => console.error('Error adding user:', error));
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(http://localhost:3001/users/${id})
      .then(() => fetchUsers())
      .catch(error => console.error('Error deleting user:', error));
  };

  const resetForm = () => {
    setFormData({
      id_utilisateur: '',
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: '',
      telephone: ''
    });
    setIsEditing(false);
  };

  const filteredUsers = users.filter(user =>
    ${user.nom} ${user.prenom}.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management-container">
      <h1>User Management</h1>
      <div className="user-management-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <FaSearch />
        </div>

        <form className="user-form" onSubmit={handleSubmit}>
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
            Prénom:
            <input
              type="text"
              value={formData.prenom}
              onChange={e => setFormData({ ...formData, prenom: e.target.value })}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              required
            />
          </label>
          <label>
            Telephone:
            <input
              type="text"
              value={formData.telephone}
              onChange={e => setFormData({ ...formData, telephone: e.target.value })}
              required
            />
          </label>
          <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
          {isEditing && <button onClick={resetForm}>Cancel</button>}
        </form>

        <div className="user-list">
          <h2>User List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Role</th>
                <th>Telephone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id_utilisateur}>
                  <td>{user.id_utilisateur}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.telephone}</td>
                  <td>
                    <FaEdit onClick={() => handleEdit(user)} />
                    <FaTrashAlt onClick={() => handleDelete(user.id_utilisateur)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;