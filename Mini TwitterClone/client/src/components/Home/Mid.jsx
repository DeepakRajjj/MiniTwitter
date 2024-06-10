import React from 'react';
import HomeContent from './HomeContent/HomeContent';
import Profile from './Profile/Profile';
// import { Link } from 'react-router-dom';

function Mid({ selectedOption }) {
  return (
    <div className="Mid" style={{backgroundColor:'aliceblue',width:'870px',paddingTop:'20px', borderRadius:'10px'}}>
      {selectedOption === 'Home' && <HomeContent/>}
      {selectedOption === 'Explore' && <div>Explore Content</div>}
      {selectedOption === 'Notification' && <div>Notification Content</div>}
      {selectedOption === 'Messages' && <div>Messages Content</div>}
      {selectedOption === 'Profile' && <Profile/>}
    </div>
  );
}

export default Mid;
