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
                    </p>{' '}
                    <button
                        onClick={() => {
                            document
                                .getElementById('footer')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Let's talk
                    </button>
                    <Social>
                        <p>Check out my</p>
                        <div className='social-icons'>
                            {' '}
                            <span>
                                <a
                                    href='https://github.com/picu63'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    title='GitHub Profile'
                                    aria-label='Visit my GitHub profile'
                                >
                                    <AiFillGithub />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.facebook.com/piotrpicu'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    title='Facebook Profile'
                                    aria-label='Visit my Facebook profile'
                                >
                                    <FaFacebookF />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.linkedin.com/in/piotrolearczyk'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    title='LinkedIn Profile'
                                    aria-label='Visit my LinkedIn profile'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://www.instagram.com/piotr_olearczyk'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    title='Instagram Profile'
                                    aria-label='Visit my Instagram profile'
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
        transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(30deg);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:hover {
            transform: scale(1.05);
            filter: drop-shadow(0px 10px 15px #01be9580);
            box-shadow: 0 0 15px 5px rgba(1, 190, 150, 0.3);
        }

        &:hover::before {
            opacity: 1;
            animation: shine 1s forwards;
        }

        @keyframes shine {
            0% {
                transform: translateX(-100%) rotate(30deg);
            }
            100% {
                transform: translateX(100%) rotate(30deg);
            }
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
            display: flex;
            align-items: center;
            justify-content: center;
        }

        span:hover {
            transform: rotate(360deg);
        }

        span:hover svg {
            transform: rotate(360deg);
        }

        a {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
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
