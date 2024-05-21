// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loginpage from './login';
import SignupPage from './signup';

function Routes() {
  return (
    <Router>
      
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={Loginpage} />
        {/* Add other routes if needed */}
      
    </Router>
  );
}

export default Routes;
