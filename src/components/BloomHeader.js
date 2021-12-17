import React from 'react';
import styled from 'styled-components';

const BloomHeader = () => {
    return(
    <HeaderStyle>
      <img width="40" src="https://assets-global.website-files.com/613baa7ad4f394142e65cb73/61b685d20908dc4ade4f8283_BloomTech-Logo-Black-FMA-p-500.png"/>
      <div>Sprint Challenge 3.3</div>
    </HeaderStyle>);
}

export default BloomHeader;

const HeaderStyle = styled.nav`
  padding: 0.5em;
  background-color: #333333;
  color:white;
  font-size: 1.25rem;
  font-family: "Lato";
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    padding: 0.5em;
    width:25px;
  }
`
