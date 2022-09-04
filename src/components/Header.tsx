import React from 'react';
import styled from 'styled-components';

import Icon from './image/search.png';

const HeaderBlock = styled.div`
  height: 48px;
  background-color: #4d80b0;
  width: 100%;
  display: flex;
  z-index: 100;
  min-width: 960px;
  position: relative;
`;

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      <div className="HeaderContainer">
        <div className="WebTitle">2setMatch</div>
        <div className="HeaderRight">
          <div className="search">
            <img className="icon" src={Icon} alt="アイコン" />
          </div>
          <div className="account">
            <a className="circle">TH</a>
          </div>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
