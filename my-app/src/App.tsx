import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Blog/Blog';

function App() {
    console.log(`App version: ${process.env.REACT_APP_VERSION}`);
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Hi, I'm Piotr Olearczyk and I'm software .NET developer</p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
            <Blog />
        </div>
    );
}

export default App;