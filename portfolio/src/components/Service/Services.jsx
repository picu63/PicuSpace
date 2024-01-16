import React from 'react';
import { MdDesignServices } from 'react-icons/md';
import { TiArrowSync } from 'react-icons/ti';
import { CgWebsite } from 'react-icons/cg';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';
import ProfComponent from '../Banner/ProfComponent';

const Services = () => {
    return (
        <Container id='services'>
            <Slide direction='down'>
                <h4>
                    My <span className='green'>services</span>
                </h4>
                <h1>What I Do</h1>
            </Slide>
            <Cards>
                <Slide direction='left'>
                    <Card
                        Icon={MdDesignServices}
                        title={'software development'}
                        disc={`Developing .NET applications using C# and ASP.NET`}
                    />
                </Slide>
                <Slide direction='up'>
                    <Card
                        Icon={TiArrowSync}
                        title={'CI/CD'}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction='up'>
                    <Card
                        Icon={CgWebsite}
                        title={'software architecture'}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
            </Cards>
        </Container>
    );
};

export default Services;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }

    h1 {
        padding-top: 1rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;
