import React, { useState } from 'react';
import styled from 'styled-components';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';
import { MyCaptchaClass } from './Captcha';

const HiddenPhoneNumber = ({ phoneNumber }) => {
    const [showFullNumber, setShowFullNumber] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);

    const handleShowClick = () => {
        setShowCaptcha(true);
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
                    {showCaptcha ? (
                        <MyCaptchaClass
                            onSuccessfull={() => setShowFullNumber(true)}
                        />
                    ) : (
                        <span
                            className='show-button green'
                            onClick={handleShowClick}
                        >
                            show
                        </span>
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
