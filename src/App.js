import React from 'react';
// import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Body from './components/Body';
import Footer from './components/Footer';
import './css/tailwindcss.css';
import Signup from './components/Registration';
import Register from './components/Register';
import Login from './components/login';
// import Welcome from'./components/Welcome';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";


function App() {
  return (
    
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Body/>

        </Route>
        <Route path="/about-us">
          <About/>
          
        </Route>
        <Route path="/user-signup">
          <Signup/>
    
        </Route>
        <Route path="/register">
          <Register/>
    
        </Route>
        <Route path="/user-login">
          <Login/>
    
        </Route>
        {/* <Route path="/user-welcome">
          <Welcome/>
    
        </Route>  */}
      </Switch>
    </Router>

    // <div className="App">
    //    <Navbar/>
     
    //   <Body/>
      
    //   <Footer/>
    // </div>

  );
}

export default App;
