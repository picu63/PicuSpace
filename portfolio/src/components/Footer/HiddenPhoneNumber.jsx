import React, { useState } from 'react';
import styled from 'styled-components';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';

const HiddenPhoneNumber = ({ phoneNumber }) => {
    const [showFullNumber, setShowFullNumber] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('');

    const handleShowClick = () => {
        setShowCaptcha(true);
    };

    const toggleShowFullNumber = () => {
        if (validateCaptcha(captchaValue)) {
            setShowFullNumber(!showFullNumber);
            setShowCaptcha(false);
        } else {
            alert('Nieprawidłowa wartość captcha');
        }
    };

    const handleCaptcha = (e) => {
        setCaptchaValue(e.target.value);
    };

    return (
        <Container>
            <span style={{ display: showFullNumber ? 'none' : 'inline-block' }}>
                {phoneNumber.slice(0, -8) + '********'}
            </span>
            <a href='tel:+48731467618'>
                <span
                    style={{
                        display: showFullNumber ? 'inline-block' : 'none',
                    }}
                >
                    {phoneNumber}
                </span>
            </a>
            {!showFullNumber && (
                <>
                    <span
                        className='show-button green'
                        onClick={handleShowClick}
                    >
                        show
                    </span>
                    {showCaptcha && (
                        <>
                            <LoadCanvasTemplate />
                            <input type='text' onChange={handleCaptcha} />
                            <span
                                className='show-button green'
                                onClick={toggleShowFullNumber}
                            >
                                Verify
                            </span>
                        </>
                    )}
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
    .show-button {
        cursor: pointer;
        :hover {
            color: orange;
        }
    }
`;

export default HiddenPhoneNumber;
