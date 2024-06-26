import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Link, BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Loginpage from './login';
import SignupPage from './signup';
import HomePage from './homepage';
import Profile from './profile';
import { AuthProvider } from './AuthContext';
import Tes from './tes';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <Router>
    <AuthProvider>
    <Routes>

    <Route path="/" element={<Loginpage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<Loginpage />} />
    <Route path="/home" element={<HomePage  />} />
    <Route path="/profile" element={<Profile  username="Manu" />} />
  </Routes>
    </AuthProvider>
  </Router>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
