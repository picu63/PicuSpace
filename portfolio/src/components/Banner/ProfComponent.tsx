import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

import { Slide } from 'react-awesome-reveal';
import personalPhoto from './piotr_olearczyk_personal_photo.png';

const ProfComponent = () => {
    return (
        <Container id='home'>
            <Slide direction='left'>
                <Texts>
                    <h4>
                        Hello <span className='green'>I'am</span>
                    </h4>
                    <h1 className='green'>Piotr Olearczyk</h1>
                    <h3>Software Developer</h3>
                    <p>
                        I'm a Developer, Husband, Dad and Dancer!! 🌱 I’m
                        currently learning react and python 😊 👯 I’m looking to
                        collaborate with other content creators 🥅 2023 Goals:
                        Contribute more to Open Source projects ⚡ Hobbys: I'm
                        professional hip-hop dancer, love to play basketball and
                        listen to music.
                    </p>
                    <button>Let's talk</button>
                    <Social>
                        <p>Check out my</p>
                        <div className='social-icons'>
                            <span>
                                <a
                                    href='https://github.com/picu63'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <AiFillGithub />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.facebook.com/piotrpicu'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaFacebookF />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.linkedin.com/in/piotrolearczyk'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.instagram.com/piotr_olearczyk'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <GrInstagram />
                                </a>
                            </span>
                        </div>
                    </Social>
                </Texts>
            </Slide>
            <Slide direction='right'>
                <Profile>
                    <img src={personalPhoto} alt='profile' />
                </Profile>
            </Slide>
        </Container>
    );
};

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

const Texts = styled.div`
    flex: 1;
    padding-top: 3em;
    h4 {
        padding: 1rem 0;
        font-weight: 500;
    }
    h1 {
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
    }
    h3 {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p {
        font-weight: 300;
    }

    button {
        padding: 0.7rem 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #01be96;
        border: none;
        color: #fff;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover {
            filter: drop-shadow(0px 10px 10px #01be9570);
        }
    }
`;
const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        font-size: 0.9rem;
        @media (max-width: 690px) {
            font-size: 0.7rem;
        }
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            width: 2.3rem;
            height: 2rem;
            clip-path: polygon(
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%,
                0% 50%
            );
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease-in-out;
            :hover {
                transform: rotate(360deg);
            }
        }

        a {
            color: #fff;
            position: absolute;
            padding: 1em;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
const Profile = styled.div`
    img {
        width: 25rem;
        filter: drop-shadow(0px 10px 10px #01be9570);
        transition: transform 400ms ease-in-out;
        @media (max-width: 790px) {
            width: 20rem;
        }

        @media (max-width: 660px) {
            width: 18rem;
        }

        @media (max-width: 640px) {
            width: 100%;
            height: 500px;
            object-fit: contain;
        }
    }

    :hover img {
        transform: translateY(-10px);
    }
`;
