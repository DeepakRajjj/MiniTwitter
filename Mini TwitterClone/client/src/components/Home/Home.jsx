import React, { useState } from 'react';
import Left from './Left';
import Mid from './Mid';
import Right from './Right';
import './Home.css';

function Home() {
  const [selectedOption, setSelectedOption] = useState('Home');

  return (
    <div className="home-container">
      <Left className='left' setSelectedOption={setSelectedOption} />
      <Mid className='mid' selectedOption={selectedOption} />
      <Right className='right' />
    </div>
  );
}

export default Home;
