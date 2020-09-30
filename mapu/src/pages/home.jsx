import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Home = () =>{
    return(

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Mapu Marshmalloww</code> website!!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/mapu.marshmalloww/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my Instagram
        </a>
      </header>
    )    
}

export default Home;