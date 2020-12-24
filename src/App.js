import React from 'react'; 
import './App.css';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { useStateValue } from './StateProvider';
import Dashboard from './Dashboard';

function App() {
  const [{ user } , dispatch] = useStateValue(); 



  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />

        ): (
          <Dashboard />

        )}
      </Router>

    </div>
  );
} 

export default App;
