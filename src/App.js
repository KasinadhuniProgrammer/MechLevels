import React from 'react'; 
import './App.css';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { useStateValue } from './StateProvider';
import Header from './Header';
import TeslaFile from './TeslaFile';
import MicrosoftFile from './MicrosoftFile';
function App() {
  const [{ user } , dispatch] = useStateValue(); 



  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />

        ): (
    

          <Route path="/">
            <Header />
            <TeslaFile />
            <MicrosoftFile />
          </Route>
          


        )}
      </Router>

    </div>
  );
} 

export default App;
