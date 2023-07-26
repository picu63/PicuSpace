import React, { useState } from 'react';
import styled from "styled-components";

const HiddenPhoneNumber = ({ phoneNumber }) => {
  const [showFullNumber, setShowFullNumber] = useState(false);

  const toggleShowFullNumber = () => {
    setShowFullNumber(!showFullNumber);
  };

  return (
    <Container>
      <span style={{ display: showFullNumber ? 'none' : 'inline-block' }}>
        {phoneNumber.slice(0, -8) + '********'}
      </span>
      <a href="tel:+48731467618">
        <span style={{ display: showFullNumber ? 'inline-block' : 'none' }}>
        {phoneNumber}
        </span>
      </a>
      {!showFullNumber && (
        <span className="show-button green" onClick={toggleShowFullNumber}>
          show
        </span>
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
