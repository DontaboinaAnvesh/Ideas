import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Login.css'; // For styling
import bufferingGif from '../../Images/idea-lightbulb.jpeg'; // Add buffering GIF

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulate a 5-second delay for buffering
    setTimeout(async () => {
      const isAuthenticated = await login(email, password);
      setLoading(false); // Stop loading after authentication

      if (isAuthenticated) {
        navigate('/home'); // Redirect to home page on successful login
      } else {
        alert('Invalid email or password');
      }
    }, 500); // 5-second buffering delay
  };

  return (
    <div className="login-container">
      {loading ? (
        <div className="loading-animation">
          <img src={bufferingGif} alt="Buffering..." /> {/* Use buffering GIF */}
          <p>Loading, please wait...</p>
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <button type="submit" disabled={loading}>Login</button>
          </form>
          <p>
            Don't have an account? 
            <span onClick={() => navigate('/signup')} className="link">Signup</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;