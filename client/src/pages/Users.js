import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; // Create and import your CSS file
import { FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
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
      axios.put(`http://localhost:3001/users/${formData.id_user}`, formData)
        .then(() => {
          fetchUsers(); // Refresh user list after updating user
          resetForm();
        })
        .catch(error => console.error('Error updating user:', error));
    }
    
      axios.post('http://localhost:3001/users', formData)
        .then(() => {
          fetchUsers(); // Refresh user list after adding a new user
          resetForm();
        })
        .catch(error => console.error('Error adding user:', error));
    
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(() => fetchUsers())
      .catch(error => console.error('Error deleting user:', error));
  };

  const resetForm = () => {
    setFormData({

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
    `${user.nom} ${user.prenom}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management-container">
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <FaSearch />
        </div>
      <div className="user-management-content">
        <h1>User Management</h1>

        <form className="user-form" onSubmit={handleSubmit}>
          <div><div><label>
            Nom:
          </label></div>
            <div><input
              type="text"
              value={formData.nom}
              onChange={e => setFormData({ ...formData, nom: e.target.value })}
              required
            /></div>
          </div>
          <div><div><label>
            Prénom:
          </label></div>
            <div><input
              type="text"
              value={formData.prenom}
              onChange={e => setFormData({ ...formData, prenom: e.target.value })}
              required
            /></div>
          </div>
          <div><div><label>
            Email:
          </label></div>
            <div><input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            /></div>
          </div>
          <div><div><label>
            Password:
          </label></div>
            <div><input
              type="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              required
            /></div>
          </div>
          <div><div><label>
            Role:
          </label></div>
            <div><input
              type="text"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              required
            /></div>
          </div>
          <div><div><label>
            Telephone:
          </label></div>
            <div><input
              type="text"
              value={formData.telephone}
              onChange={e => setFormData({ ...formData, telephone: e.target.value })}
              required
            /></div>
          </div>
          <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
          {isEditing && <button onClick={resetForm}>Cancel</button>}
        </form>
        </div>
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
                <tr key={user.id_user}>
                  <td>{user.id_user}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.telephone}</td>
                  <td>
                    <FaEdit onClick={() => handleEdit(user)} />
                    <FaTrashAlt onClick={() => handleDelete(user.id_user)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Users;
