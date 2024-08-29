import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState({
    name: 'Munesh verma',
    email: 'chandravanshiranjan899@gmail.com',
    bio: 'A short bio about Munesh Verma.'
  });

  const [editing, setEditing] = useState(false);
  const [newUser, setNewUser] = useState({ ...user });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setNewUser({ ...user });
    setEditing(false);
  };

  const handleSaveClick = () => {
    setUser({ ...newUser });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="App">
      <h1>User Profile</h1>
      {editing ? (
        <div>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <textarea
            name="bio"
            value={newUser.bio}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default App;
