import ProfComponent from './Banner/ProfComponent';
import Projects from './Projects/Projects';
import Services from './Service/Services';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Alert.css';

const MainPageContent = () => {
    const inDevelopment = true;

    useEffect(() => {
        window.onload = () => {
            const hash = window.location.hash;
            // Remove the '#' from the hash
            const id = hash.replace('#', '');

            // Now you can use the id to perform any actions, like scrolling to the element
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }, []);

    return (
        <div>
            {inDevelopment && (
                <div className='alert alert-warning' role='alert'>
                    This website is still in development. Some features may not
                    work as expected.
                </div>
            )}
            <ProfComponent />
            <Services />
            <Projects />
        </div>
    );
};

export default MainPageContent;
