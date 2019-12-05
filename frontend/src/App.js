import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main';
import Login from './components/Login';


function App() {
  return (
      <div className="App">
        <Header />
        <Main />        
        {/* <Footer />  */}
        {/* {localStorage.token ? 
          ( <div>
              <Header />
              <Main />        
              <Footer /> 
            </div>
          ) : <Redirect to="/login" />
        }   */}
      </div>
  );
}

export default App;
