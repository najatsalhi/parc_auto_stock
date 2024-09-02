// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Users.css'; // Ensure this CSS file is created and properly styled
// import { FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     userId: '',
//     nom: '',
//     prenom: '',
//     email: '',
//     password: '',
//     role: '',
//     telephone: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchUsers(); // Fetch users on component mount
//   }, []);

//   const fetchUsers = () => {
//     axios
//       .get("http://localhost:3001/users")
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error('Error fetching users:', error));
//   };

//   const handleEdit = (user) => {
//     setFormData({
//       userId: user.userId,
//       nom: user.nom,
//       prenom: user.prenom,
//       email: user.email,
//       password: user.password,
//       role: user.role,
//       telephone: user.telephone,
//     });
//     setIsEditing(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       !formData.nom ||
//       !formData.prenom ||
//       !formData.email ||
//       !formData.password ||
//       !formData.role ||
//       !formData.telephone
//     ) {
//       console.error('Please fill in all required fields');
//       return;
//     }

//     if (isEditing) {
//       axios
//         .put("http://localhost:3001/users/" + formData.userId, formData)
//         .then(() => {
//           fetchUsers(); // Refresh user list after updating user
//           resetForm();
//         })
//         .catch((error) => console.error('Error updating user:', error));
//     } else {
//       axios
//         .post("http://localhost:3001/users", formData)
//         .then(() => {
//           fetchUsers(); // Refresh user list after adding a new user
//           resetForm();
//         })
//         .catch((error) => console.error('Error adding user:', error));
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       axios
//         .delete(`http://localhost:3001/users/${id}`)
//         .then(() => fetchUsers())
//         .catch((error) => console.error('Error deleting user:', error));
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       userId: '',
//       nom: '',
//       prenom: '',
//       email: '',
//       password: '',
//       role: '',
//       telephone: '',
//     });
//     setIsEditing(false);
//   };

//   const filteredUsers = users.filter((user) =>
//     (`${user.nom} ${user.prenom}`).toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-management-container">
//       <h1>User Management</h1>
//       <div className="user-management-content">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search users..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <FaSearch />
//         </div>

//         <form className="user-form" onSubmit={handleSubmit}>
//           <label>
//             Nom:
//             <input
//               type="text"
//               value={formData.nom}
//               onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
//               required
//             />
//           </label>
//           <label>
//             Prénom:
//             <input
//               type="text"
//               value={formData.prenom}
//               onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
//               required
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//           </label>
//           <label>
//             Role:
//             <input
//               type="text"
//               value={formData.role}
//               onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//               required
//             />
//           </label>
//           <label>
//             Telephone:
//             <input
//               type="text"
//               value={formData.telephone}
//               onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
//               required
//             />
//           </label>
//           <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
//           {isEditing && (
//             <button type="button" onClick={resetForm}>
//               Cancel
//             </button>
//           )}
//         </form>

//         <div className="user-list">
//           <h2>User List</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Nom</th>
//                 <th>Prénom</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Telephone</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user) => (
//                 <tr key={user.userId}>
//                   <td>{user.userId}</td>
//                   <td>{user.nom}</td>
//                   <td>{user.prenom}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.telephone}</td>
//                   <td>
//                     <FaEdit onClick={() => handleEdit(user)} />
//                     <FaTrashAlt onClick={() => handleDelete(user.userId)} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; // Ensure this CSS file is created and properly styled
import { FaSearch, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    userId: '',
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: '',
    telephone: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error('Expected an array but received:', response.data);
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      userId: user.userId,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      role: user.role,
      telephone: user.telephone,
    });
    setIsEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.password ||
      !formData.role ||
      !formData.telephone
    ) {
      console.error('Please fill in all required fields');
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:3001/users/${formData.userId}`, formData);
        fetchUsers(); // Refresh user list after updating user
      } else {
        await axios.post('http://localhost:3001/users', formData);
        fetchUsers(); // Refresh user list after adding a new user
      }
      resetForm();
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'adding'} user:`, error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3001/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      userId: '',
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: '',
      telephone: '',
    });
    setIsEditing(false);
  };

  const filteredUsers = users.filter((user) =>
    (`${user.nom} ${user.prenom}`).toLowerCase().includes(searchTerm.toLowerCase())
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch />
        </div>

        <form className="user-form" onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              required
            />
          </label>
          <label>
            Prénom:
            <input
              type="text"
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            />
          </label>
          <label>
            Telephone:
            <input
              type="text"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              required
            />
          </label>
          <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
          {isEditing && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
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
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.telephone}</td>
                    <td>
                      <FaEdit onClick={() => handleEdit(user)} />
                      <FaTrashAlt onClick={() => handleDelete(user.userId)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
