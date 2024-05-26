import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import RegisterImg from '../../assets/auth/register.avif';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/usersSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const store = useSelector((state) => state?.users);
  const { userAuth } = store;
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    if (userAuth?.token) {
      window.location.href = '/dashboard';
    }
  }, [userAuth, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      newPassword: Yup.string().required('New password is required'),
    }),
    onSubmit: (values) => {
      //   console.log(values);
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
        newPassword: values.newPassword,
        id: id,
      };
      dispatch(registerUserAction(data)).then((res) => {
        // console.log(res);
        if (res?.error) {
          toast.error(res?.payload?.msg);
          return;
        }
        window.location.href = '/dashboard';
      });
    },
  });

  return (
    <>
      <ToastContainer />
      <main className="flex justify-center min-h-screen mt-5 text-gray-900 bg-gray-100">
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-20 sm:rounded-lg">
          <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
            <div>
              <img src={Logo} className="w-32 mx-auto" alt="logo" />
            </div>
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Sign up</h1>
              <div className="flex-1 w-full mt-8">
                <form
                  className="max-w-xs mx-auto"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="text-sm text-red-500">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-sm text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex cursor-pointer justify-end mt-2 text-sm text-gray-600"
                  >
                    {showPassword ? 'Hide' : 'Show'} Password
                  </span>
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-sm text-red-500">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <input
                    value={formik.values.newPassword}
                    onChange={formik.handleChange('newPassword')}
                    onBlur={formik.handleBlur('newPassword')}
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    id="newPassword"
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="flex cursor-pointer justify-end mt-2 text-sm text-gray-600"
                  >
                    {showNewPassword ? 'Hide' : 'Show'} Password
                  </span>
                  {formik.errors.newPassword && formik.touched.newPassword ? (
                    <div className="text-sm text-red-500">
                      {formik.errors.newPassword}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    onClick={formik.handleSubmit}
                    className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-xs text-center text-gray-600">
                    <span className="px-2">I agree to all</span>
                    <span className="border-b border-gray-500 border-dotted ">
                      Terms of Service
                    </span>
                    <span className="px-2">and its</span>
                    <span className="border-b border-gray-500 border-dotted ">
                      Privacy Policy
                    </span>
                  </p>
                </form>

                <div className="my-12 text-center border-b">
                  <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                    Already have an account?
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      navigate('/login');
                    }}
                    className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="p-2 bg-white rounded-full">
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
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Login Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-center lg:flex">
            <div
              className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
              style={{
                backgroundImage: `url(${RegisterImg})`,
              }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
