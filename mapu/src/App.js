import React from 'react';
import { BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
      Link }
  from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <Router>
      <Switch>

          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Redirect to="/"/>
        </Switch>

    </Router>
    
  );
}

export default App;
