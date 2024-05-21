import React, { useState } from 'react';
import { Link ,Navigate,useNavigate} from 'react-router-dom';
import './signup.css'; // Import the CSS file for styling

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    FullName: '',
    username: '',
    password: ''
  });
  const navigate  = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called"); // Log to confirm function is called
  
    try {
      console.log("formSubmit");
      console.log(formData);
  
      const response = await fetch('https://social-media-backend-7m3p7xxhd-bhawna89s-projects.vercel.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Get error message from response
        console.error('Failed to sign up:', response.status, errorText);
        // Handle specific error cases based on status code
        if (response.status === 401) {
          throw new Error('Unauthorized'); // Example: Unauthorized access
        } else {
          throw new Error('Failed to sign up'); // Default error message
        }
      }
  
      const responseData = await response.json();
      console.log("Success:", responseData);
      navigate('/login');
      alert('Sign up successful!'); // Display alert on success
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Failed to sign up'); // Display alert on error
    }
  };
  
  return (
    <>
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Amita&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"></link>
        <title>Sign up &bull; Instagram</title>
      </div>
      <div id="SignupContainer">
        <div className="signupBox">
          <header>
            <h2>Instagram</h2>
            <p>Sign up to see photos and videos from your friends.</p>
            <button><i className="fab fa-facebook"></i>Log in with Facebook</button>
          </header>
          <div className="seperator">
            <hr></hr>OR<hr></hr>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder=" Email" onChange={handleChange} />
            <input type="text" name="FullName" placeholder="Full Name" onChange={handleChange} />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Sign up</button>
          </form>
          <footer>
            <p>
              By signing up, you agree to our <a href="#">Terms, Data Policy</a> and <a href="#">Cookies Policy</a>.
            </p>
          </footer>
        </div>
      </div>
      <div id="BottomContainer">
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <div id="AppsContainer">
        <p>Get the app.</p>
        <img src="https://i.postimg.cc/Vkm7D9Xd/appstore.png" alt="appstore" />
        <img src="https://i.postimg.cc/R00gzMsm/playstore.png" alt="playstore" />
      </div>
      <div id="LastContainer">
        <div className="links">
          <a href="#">ABOUT</a>
          <a href="#">HELP</a>
          <a href="#">PRESS</a>
          <a href="#">API</a>
          <a href="#">JOBS</a>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
          <a href="#">LOCATIONS</a>
          <a href="#">TOP ACCOUNTS</a>
          <a href="#">HASH TAGS</a>
          <a href="#">LANGUAGE</a>
        </div>
        <div className="copyright">
          <p>&copy; 2020 INSTAGRAM SIGN UP PAGE CLONE</p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
