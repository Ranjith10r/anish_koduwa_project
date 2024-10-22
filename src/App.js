import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentGreeting = getGreeting();
    setGreeting(`${currentGreeting}, ${name}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Greet Me App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Greet
        </button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
};

export default App;