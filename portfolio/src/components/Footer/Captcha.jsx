import { useEffect } from 'react';
import styled from 'styled-components';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';

export const MyCaptchaClass = ({ onSuccessfull }) => {
    useEffect(() => {
        loadCaptchaEnginge(6);
    });

    const submitMyForm = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            onSuccessfull();
        } else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = '';
        }
    };
    return (
        <CaptchaContainer>
            <LoadCanvasTemplate />
            <input
                placeholder='Enter Captcha Value'
                id='user_captcha_input'
                name='user_captcha_input'
                type='text'
            ></input>{' '}
            <button
                onSubmit={() => submitMyForm()}
                onClick={() => submitMyForm()}
            >
                Submit
            </button>
        </CaptchaContainer>
    );
};

const CaptchaContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align: center;
    input {
        border: 1px solid gray;
        outline: none;
        padding: 1rem 0.5rem;
    }
    input::placeholder {
        text-align: center;
    }
    button {
        width: 5rem;
        height: 1.8rem;
        background-color: #01be96;
        border: none;
        border-radius: 5px;
        filter: drop-shadow(0px 4px 5px #01be9551);
        cursor: pointer;
        :hover {
            filter: drop-shadow(0px 6px 9px #01be9551);
        }
    }
`;
