import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Blog from './Blog/Blog';
import Header from './components/Banner/Header';
import ProfComponent from './components/Banner/ProfComponent';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Service/Services';

function App() {
    console.log(`App version: ${process.env.REACT_APP_VERSION}`);
    return (
        // <div className='App'>
        <div>
            <Container>
                <Banner>
                    <Header />
                    <ProfComponent />
                </Banner>
                <Services />
                <LightColor>
                    <Projects />
                </LightColor>
                <Clients />
                <LightColor>
                    <Footer />
                </LightColor>
            </Container>
            {/* <LightColor>
                <Blog />
            </LightColor> */}
        </div>
    );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    height: 100vh;
    @media (max-width: 640px) {
        height: 100%;
        padding-bottom: 2rem;
    }
`;

const LightColor = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
`;
