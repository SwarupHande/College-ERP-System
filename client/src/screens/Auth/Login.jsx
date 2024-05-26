import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import LoginImg from '../../assets/auth/login.avif';
import { loginUserAction } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Login() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.users);
  const { userAuth } = store;
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (userAuth?.token) {
      window.location.href = '/dashboard';
    }
  }, [userAuth, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(loginUserAction(values)).then((res) => {
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
              <img alt="logo" src={Logo} className="w-32 mx-auto" />
            </div>
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Login</h1>
              <div className="flex-1 w-full mt-8">
                <form
                  onSubmit={formik.handleSubmit}
                  className="max-w-xs mx-auto"
                >
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
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
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                  ) : null}
                  <button
                    type="submit"
                    onClick={formik.handleSubmit}
                    className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                  >
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
                    <span className="ml-3">Login</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-center lg:flex">
            <div
              className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
              style={{
                backgroundImage: `url(${LoginImg})`,
              }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
