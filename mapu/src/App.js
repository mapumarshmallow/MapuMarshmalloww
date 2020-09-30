import React from 'react';
import { HashRouter as Router,
      Switch,
      Route,
      Redirect,
      Link }
  from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Admin from './pages/admin';
import PageNotFound from './pages/404';


function App() {
  return (
    <div>
      
      <Router>
        <div style={{background:"black",
          padding:"10px",
          color:"white",
          boxShadow:"0px 5px 10px 2px rgba(0,0,0,0.25)"}}>
          
          <Link style={{margin:"10px", color:"white"}} to="/">Home</Link>
          <Link style={{margin:"10px", color:"white"}} to="/about">About</Link>
          <Link style={{margin:"10px", color:"white"}} to="/login">Login</Link>
        </div>
        

        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>

    </Router>
    </div>
    
    
  );
}

export default App;
