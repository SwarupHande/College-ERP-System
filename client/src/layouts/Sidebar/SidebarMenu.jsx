import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logoutAction, sendInviteLinkAction } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

export default function SidebarMenu() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.users);
  const { userAuth } = store;
  // console.log(userAuth?.userId);
  const [feeOptionsOpen, toggleFeeOptions] = useState(false);
  const [certificateOptionsOpen, toggleCertificateOptions] = useState(false);
  const [salaryOptionsOpen, toggleSalaryOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
      expiry: new Date().toISOString().slice(0, 10),
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      expiry: Yup.string().required('Expiry is required'),
    }),

    onSubmit: (values) => {
      setLoading(true);
      const data = {
        email: values.email,
        password: values.password,
        expiry: values.expiry,
        userId: userAuth?.userId,
      };
      dispatch(sendInviteLinkAction(data)).then((res) => {
        console.log(res);

        if (res?.error) {
          toast.error(res?.payload?.msg);
          setLoading(false);
          return;
        }
        setLoading(false);
        handleClose();
        toast.success('Invite link sent successfully');
      });
    },
  });

  const toggleFeeOptionsHandler = () => {
    toggleFeeOptions(!feeOptionsOpen);
  };
  const toggleCertificateOptionsHandler = () => {
    toggleCertificateOptions(!certificateOptionsOpen);
  };
  const toggleSalaryOptionsHandler = () => {
    toggleSalaryOptions(!salaryOptionsOpen);
  };

  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative bg-gray-200 rounded-lg shadow">
                <button
                  onClick={handleClose}
                  type="button"
                  className="absolute top-3 right-2.5  bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium ">
                    Send Invite Link to Other Staff
                  </h3>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium "
                      >
                        Receiver email
                      </label>
                      <input
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        type="email"
                        name="email"
                        id="email"
                        className=" border  text-sm rounded-lg  block w-full p-2.5  "
                        placeholder="name@company.com"
                        required
                        autoFocus
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-sm text-red-500">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium "
                      >
                        Verification password
                      </label>
                      <input
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        type="text"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" border  text-sm rounded-lg  block w-full p-2.5  "
                        required
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-sm text-red-500">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="expiry"
                        className="ml-2 text-sm font-medium "
                      >
                        Expiry Date
                      </label>
                      <input
                        value={formik.values.expiry}
                        onChange={formik.handleChange('expiry')}
                        onBlur={formik.handleBlur('expiry')}
                        className=" border  text-sm rounded-lg  block w-full p-2.5  "
                        type="date"
                        id="expiry"
                        name="expiry"
                      />
                      {formik.touched.expiry && formik.errors.expiry ? (
                        <div className="text-sm text-red-500">
                          {formik.errors.expiry}
                        </div>
                      ) : null}
                    </div>

                    {loading ? (
                      <button
                        disabled
                        className="flex items-center justify-center w-full p-3 mb-10 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
                      >
                        <span className="ml-2">
                          <span className="flex items-center justify-center text-gray-500">
                            <CircularProgress color="inherit" />
                          </span>
                        </span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full p-3 mb-10 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
                      >
                        <svg
                          className="w-5 h-5 mx-2 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          />
                        </svg>
                        <span className="ml-2">Send Invite Link</span>
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <aside className="flex-shrink-0 h-screen p-4 w-72 ">
        <div className="flex flex-col h-full pt-5 pb-4 rounded-lg neumorphism-shadow">
          {/* <!-- Sidebar header --> */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 mx-4 rounded-lg ">
            <Link
              to="/"
              className="px-4 py-1 mt-3 text-xl font-semibold tracking-wider text-gray-600 rounded-md hover:underline focus:ring focus:outline-none"
            >
              <img src={Logo} alt="logo" className="w-full h-10" />
            </Link>
          </div>
          {/* <!-- Sidebar links --> */}
          <nav className="flex-1 max-h-full p-4 mt-6 overflow-y-hidden">
            <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-y divide-blue-300 neumorphism-shadow">
              <li>
                <button
                  onClick={() => toggleFeeOptionsHandler()}
                  className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Fee Receipt</span>
                  <span className="ml-auto">
                    <svg
                      className={`w-4 h-4  ${
                        feeOptionsOpen
                          ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                          : 'transform rotate-0 transition-all duration-300 ease-in-out'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {feeOptionsOpen ? (
                  <ul className="transition-all duration-300 ease-in-out">
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/studentrecord"
                      >
                        Upload Fees Record
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/studentlist"
                      >
                        Fee Receipt List
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li>
                <button
                  onClick={() => toggleCertificateOptionsHandler()}
                  className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring"
                  data-bs-target="#settingsCollapse"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="settingsCollapse"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Certificates</span>
                  <span className="ml-auto">
                    <svg
                      className={`w-4 h-4  ${
                        certificateOptionsOpen
                          ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                          : 'transform rotate-0 transition-all duration-300 ease-in-out'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {certificateOptionsOpen ? (
                  <ul>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/certificateDrop"
                      >
                        Upload Certificate
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/certificatelist"
                      >
                        Certificate List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/validate"
                      >
                        Validate Certificate
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li>
                <button
                  onClick={() => toggleSalaryOptionsHandler()}
                  className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring"
                  data-bs-target="#settingsCollapse"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="settingsCollapse"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Salary Slip</span>
                  <span className="ml-auto">
                    <svg
                      className={`w-4 h-4  ${
                        salaryOptionsOpen
                          ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                          : 'transform rotate-0 transition-all duration-300 ease-in-out'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {salaryOptionsOpen ? (
                  <ul>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/salaryDrop"
                      >
                        Upload Records
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                        to="/dashboard/salarylist"
                      >
                        Salary List
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </nav>
          <div className="flex-shrink-0 px-4 py-2">
            <div
              onClick={handleOpen}
              className="flex items-center justify-center p-3 mb-10 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
            >
              <svg
                className="w-5 h-5 mx-2 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span className="ml-2">Invite Others</span>
            </div>
            <button
              onClick={logoutHandler}
              className="flex items-center justify-center w-full px-4 py-2 text-lg font-medium text-center text-gray-600 transition-transform transform rounded-md hover:scale-105 neumorphism-shadow focus:outline-none focus:ring"
            >
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
