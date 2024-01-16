import styled from 'styled-components';
import './App.css';
import Header from './components/Banner/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Service/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Blog/Blog';
import MainPageContent from './components/MainPageContent';

function App() {
    console.log(`App version: ${process.env.REACT_APP_VERSION}`);

    return (
        <BrowserRouter>
            <Container>
                <Banner>
                    <Header />
                </Banner>
                <Routes>
                    <Route path='/' element={<MainPageContent />} />
                    <Route path='/#services' element={<MainPageContent />} />
                    <Route path='/#projects' element={<MainPageContent />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/#contact' element={<MainPageContent />} />
                </Routes>
                <LightColor>
                    <Footer />
                </LightColor>
            </Container>
        </BrowserRouter>
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
    height: 10vh;
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
