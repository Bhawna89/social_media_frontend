import React, { useState ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Loginpage.css'; // Import the CSS file for styling
import { useAuth } from './AuthContext';
import axios from 'axios';

const Loginpage = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });


  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username: formData.username, password: formData.password };
    login(userData);
  };
  
  useEffect(() => {
    const loginRequest = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/login', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
        if (response.status === 200) {
          console.log('Login successful:', response.data);
          alert('Login successful!');
          navigate('/home');
        } else {
          console.error('Failed to log in:', response.status, response.data);
          
        }
      } catch (error) {
        console.error('Error logging in:', error);
        
      }
    };
  
    if (formData.username && formData.password) {
      loginRequest();
    }
  }, [formData, navigate, login]);
  

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Overpass+Mono" rel="stylesheet" />
      <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" alt="logo" />
          </div>
          <div className="l-part">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input-1"
                onChange={handleChange}
              />
              <div className="overlap-text">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-2"
                  onChange={handleChange}
                />
                <a href="#">Forgot?</a>
              </div>
              <button type="submit" className="btn">Log in</button>
            </form>
          </div>
        </div>
        <div className="sub-content">
          <p className="s-part">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
