import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Assets
import CloseIcon from '../../assets/svg/CloseIcon';
import Logo from '../../assets/logo.png';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper
      className="text-lg bg-gray-400 animate bg-opacity-10 backdrop-filter backdrop-blur-lg"
      sidebarOpen={sidebarOpen}
    >
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={Logo} alt="logo" className="w-full h-10" />
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="/dashboard/studentrecord"
          >
            Upload Fees Record
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="/dashboard/studentlist"
          >
            Fee Receipt List
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            to="/dashboard/certificateDrop"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
          >
            Upload Certificate Records
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            to="/dashboard/certificatelist"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
          >
            Certificate List
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            to="/dashboard/validate"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
          >
            Validate Certificate
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            to="/dashboard/salaryDrop"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
          >
            Upload Salary Records
          </Link>
        </li>
        <li className="semiBold pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            to="/dashboard/salarylist"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
          >
            View Salary List
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
