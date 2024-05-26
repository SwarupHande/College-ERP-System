import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import Sidebar from '../Nav/Sidebar';
import Backdrop from '../Elements/Backdrop';
// Assets
import BurgerIcon from '../../assets/svg/BurgerIcon';
import Logo from '../../assets/logo.png';

export default function TopNavbar() {
  const store = useSelector((state) => state?.users);
  const { userAuth } = store;
  // console.log('NAV', userAuth);
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="top-0 z-10 bg-opacity-25 shadow-lg flexCenter animate bg-gradient-to-t from-blue-50 via-blue-100 to-blue-200 backdrop-filter backdrop-blur-lg"
        style={y > 100 ? { height: '50px' } : { height: '80px' }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/">
            <img src={Logo} alt="logo" className="w-full h-10" />
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {userAuth?.userId ? (
              <li className="semiBold font15 pointer">
                <Link
                  style={{
                    padding: '10px 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  to="/dashboard"
                >
                  Welcome, {userAuth?.name}
                </Link>
              </li>
            ) : (
              <li className="semiBold font15 pointer">
                <Link
                  style={{
                    padding: '10px 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  to="/login"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  Login
                </Link>
              </li>
            )}
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
