import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you can add logic to handle login or registration
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p onClick={toggleForm}>
          {isLogin ? 'Need an account? Register here.' : 'Already have an account? Login here.'}
        </p>
      </div>
    </div>








  );
}

export default App;
