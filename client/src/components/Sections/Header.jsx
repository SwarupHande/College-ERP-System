import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';
// Assets
import { Link } from 'react-router-dom';
export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen md:flex-row">
      <LeftSide
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flexCenter"
      >
        <div>
          <h1 className="hidden text-6xl extraBold md:block xl:block">
            Create Fee Receipt's & <strong>Certificates</strong>
          </h1>
          <h1 className="text-6xl extraBold md:hidden xl:hidden">
            Create Fee Receipt's & <span>Certificates</span>
          </h1>
          <HeaderP className="mt-10 text-gray-500">
            Create Fee Receipt's & Certificates for your students in just a few
            clicks. No need to worry about the design, we have got you covered.
          </HeaderP>
          <Link to="/dashboard/studentrecord">
            <button className="px-5 mb-5 py-2.5 relative rounded group text-white font-medium inline-block">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">Upload Records</span>
            </button>
          </Link>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="pt-72 md:pt-32 xl:pt-32 radius8"
            src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=826&t=st=1666351229~exp=1666351829~hmac=acfb671edf9fff306a7ce4c2d15044dc6113862a424fd2b021de0c8866d24b4c"
            alt="office"
            style={{ zIndex: 9 }}
          />
        </ImageWrapper>
        <GreyDiv>
          <img
            src="https://img.freepik.com/free-vector/office-background-video-conferencing_23-2148638212.jpg?w=1380&t=st=1666351277~exp=1666351877~hmac=07ce2525f794b32a9d9fe8ad4c01c78fab6ef0082b347f62c925a017c525123e"
            alt="office"
            style={{ width: '100%', height: '100%' }}
          />
        </GreyDiv>
      </RightSide>
    </div>
  );
}

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
