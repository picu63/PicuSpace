import { useState } from 'react';
import styled from 'styled-components';
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
            {!showFullNumber ? (
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
            ) : (
                <a href='tel:+48731467618'>
                    <span>{phoneNumber}</span>
                </a>
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
