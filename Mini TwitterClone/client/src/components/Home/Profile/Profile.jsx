import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('This is my bio.');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" />
        {isEditing && <input type="file" onChange={handleProfilePicChange} />}
      </div>
      <div className="profile-info">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio"
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{bio}</p>
            <button onClick={handleEditToggle}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
