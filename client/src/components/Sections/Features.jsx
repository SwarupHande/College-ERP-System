import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Components
import ProjectBox from '../Elements/ProjectBox';

export default function Features() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center pt-10 ">
        <HeaderInfo>
          <h1 className=" hidden pb-10 text-5xl font-bold md:block xl:block">
            Some of the<strong className="mx-3 ">Features</strong>
          </h1>
          <h1 className="pb-10 text-5xl font-bold md:hidden xl:hidden">
            Some of the<span className="mx-3 ">Features</span>
          </h1>
          <p className="text-gray-500 mx-10">
            Let's take a look at some of the features of this project and how it
            can help you.
          </p>
        </HeaderInfo>
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 row textCenter">
            <Link to="/dashboard/studentrecord">
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-1484.jpg?w=1380&t=st=1666359186~exp=1666359786~hmac=735e51eeda5975ffc254fab0abb736654fae1b78df849d34da936374500e4414"
                  title="Upload Student's Record"
                  text="Upload student's details through excel sheets and create their database."
                />
              </div>
            </Link>
            <Link to="/dashboard/studentlist">
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=1380&t=st=1666359201~exp=1666359801~hmac=cf06109fe26fad71955a9327fd679e3367c6d3fa75ad998f38f3f273fcb0b871"
                  title="Fee Receipt List"
                  text="Download fee receipt of students or send them to their respective mailIDs."
                />
              </div>
            </Link>
            <Link to="/dashboard/certificateDrop">
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img="https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?w=1380&t=st=1666359223~exp=1666359823~hmac=b60e9068760e9276bd004ab4c114cb1937ba86d780c9baed6d134842030cafed"
                  title="Upload Certificates"
                  text="Create certificates records for students in database and send them to their respective mailIDs."
                />
              </div>
            </Link>
            <Link to="/dashboard/salaryDrop">
              <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 ">
                <ProjectBox
                  img="https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?w=1380&t=st=1678530292~exp=1678530892~hmac=47c3540644104eb79c37282a56ee35cf16a9b90dec96a4e0b07eb83c75d8b496"
                  title="Salary Slip"
                  text="Create salary slip records for teachers in database and send them to their respective mailIDs."
                />
              </div>
            </Link>
          </div>

          <div className="mt-10 row flexCenter">
            <Link to="/dashboard/studentrecord">
              <button className="px-5 mb-5 py-2.5 relative rounded group  text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">Upload Records</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full pb-10 mt-2 md:pt-0 lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner className="p-5 rounded-lg flexCenter">
                <img
                  src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=826&t=st=1666359391~exp=1666359991~hmac=164b6f2be56ad32abc7c6d24aa97981eb501f041f436aff07ad28bceabc7a3d5"
                  alt="FAQ"
                />
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">Frequently Asked Questions</h2>
              <div className="flex flex-col items-start justify-start mt-4 md:justify-between md:items-start md:flex-row">
                <div className="">
                  <p className="text-base font-normal leading-6 text-gray-600 break-words ">
                    Here are some of the frequently asked questions about this
                    project. Hopefully, you will find the answer to your
                    questions here.
                  </p>
                </div>
              </div>

              <div className="px-4 2xl:container 2xl:mx-auto md:py-12 py-9">
                <div className="flex flex-col mt-8 md:flex-row md:space-x-8 md:mt-16">
                  <div className="w-full md:w-7/12 lg:w-8/12 md:mt-0 sm:mt-14">
                    <div>
                      <div className="flex items-center justify-between cursor-pointer ">
                        <button
                          aria-label="too"
                          className="transition duration-500 cursor-pointer hover:scale-110"
                          onClick={() => setShow(!show)}
                        >
                          <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                            What is the purpose of this project?
                          </h3>
                        </button>
                      </div>
                      <p
                        className={
                          'font-normal text-base leading-6 text-gray-600 mt-4  ' +
                          (show ? 'block' : 'hidden')
                        }
                      >
                        The purpose of this project is to create a database of
                        all the students and their records. This project is
                        created for the purpose of managing the records of
                        students in a school or college.
                      </p>
                    </div>

                    <hr className="bg-gray-200 my-7" />

                    <div>
                      <div className="flex items-center justify-between cursor-pointer ">
                        <button
                          aria-label="too"
                          className="transition duration-500 cursor-pointer hover:scale-110"
                          onClick={() => setShow2(!show2)}
                        >
                          <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                            What are the features of this project?
                          </h3>
                        </button>
                      </div>
                      <p
                        className={
                          'font-normal text-base leading-6 text-gray-600 mt-4  ' +
                          (show2 ? 'block' : 'hidden')
                        }
                      >
                        Easy to use and manage. It has a simple and
                        user-friendly interface. It has a feature to upload the
                        records of the students. View, Edit, Search or download
                        student records details along with their fee receipt and
                        certificates. It has a feature to send the fee receipt
                        and certificates to the students via mail.
                      </p>
                    </div>

                    <hr className="bg-gray-200 my-7" />

                    <div>
                      <div className="flex items-center justify-between cursor-pointer ">
                        <button
                          aria-label="too"
                          className="transition duration-500 cursor-pointer hover:scale-110"
                          onClick={() => setShow3(!show3)}
                        >
                          <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                            Where is the data stored of the Students?
                          </h3>
                        </button>
                      </div>
                      <p
                        className={
                          'font-normal text-base leading-6 text-gray-600 mt-4  ' +
                          (show3 ? 'block' : 'hidden')
                        }
                      >
                        The database is created with MongoDB. The database is
                        hosted on a local server but can be hosted on a cloud as
                        well.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: 10rem 0;
`;
const HeaderInfo = styled.div`
  text-align: center;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
