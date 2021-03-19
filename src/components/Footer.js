import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 10px;
  gap: clamp(10px, 1rem, 2rem);
  padding: 10px 10% 0 10%;
  background-color: aqua;
  .logo {
    width: 100%;
    height: 150px;
    grid-area: 1 / 1 / 2 / 4;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    text-align: center;
    gap: 20px;
    gap: clamp(20px, 1rem, 2rem);
    width: 100%;
    height: 100%;
  }
  .column {
    width: 100%;
    margin: auto;
  }
  @media only screen and (min-width: 768px) {
    .column {
      width: 30%;
    }
  }
`;
const Footer = () => (
  <StyledFooter>
    <div className="logo">
      <Logo />
    </div>
    <div className="flex-container">
      <div className="column">
        <h1>dbsajhdlkasjf</h1>
      </div>
      <div className="column">
        <h1>dbsajhdlkasjf</h1>
      </div>
      <div className="column">
        <h1>dbsajhdlkasjf</h1>
      </div>
    </div>
  </StyledFooter>
);
export default Footer;
