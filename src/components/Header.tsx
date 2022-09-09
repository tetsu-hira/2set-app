import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from './image/search.png';

const Header: FC<{
  updateState: (paths: string) => void;
  stateProp: string;
}> = ({ updateState, stateProp }) => {
  return (
    <div className="Header">
      <div className="HeaderContainer">
        <div className="WebTitle">2setMatch</div>
        <ul className="HeaderLink">
          <Link
            to="/"
            className="HeaderLink__item"
            onClick={() => {
              updateState('/');
            }}
          >
            <li
              className={
                stateProp === '/' ? 'HeaderLink__text' : 'HeaderLink__false'
              }
            >
              Top
            </li>
          </Link>
          <Link
            to="/about"
            className="HeaderLink__item"
            onClick={() => {
              updateState('/about');
            }}
          >
            <li
              className={
                stateProp === '/about'
                  ? 'HeaderLink__text'
                  : 'HeaderLink__false'
              }
            >
              About
            </li>
          </Link>
          {/* <Link
            to="/user"
            className="HeaderLink__item"
            onClick={() => {
              updateState('/user');
            }}
          >
            <li
              className={
                stateProp === '/user' ? 'HeaderLink__text' : 'HeaderLink__false'
              }
            >
              Team
            </li>
          </Link> */}
        </ul>
        <div className="HeaderRight">
          <div className="search">
            <img className="icon" src={Icon} alt="アイコン" />
          </div>
          <div className="account">
            <a className="circle">TH</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
