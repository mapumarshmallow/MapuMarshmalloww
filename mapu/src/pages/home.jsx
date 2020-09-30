import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Home = () =>{
    return(

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>
            Welcome to <code>Mapu Marshmalloww</code> website!!
          </b>
        </p>
        <div>
          <a
            className="App-link" style={{color:"purple"}}
            href="https://www.instagram.com/mapu.marshmalloww/"
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a> <a
            className="App-link" style={{color:"blue"}}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            FaceBook
          </a> <a
            className="App-link" style={{color:"red"}}
            href="https://www.youtube.com/watch?v=tad5W3Sm670&list=PLGaFouLvwkgDxFgBtTrohIEprCaDBmgi-"
            target="_blank"
            rel="noopener noreferrer">
            YouTube
          </a>
        </div>

        
        <div>
          <button
            type="button" onClick={(e) => { 
              e.preventDefault();
              window.location.href='http://google.com';
              }
              }>Test Button go to Google</button>
        </div>
        
      </header>
    )    
}

export default Home;