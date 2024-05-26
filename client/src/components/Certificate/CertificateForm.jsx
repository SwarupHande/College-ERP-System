import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../Utils/baseUrl';
// File saver Import
import { saveAs } from 'file-saver';
//Notification Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Progress Bar Import
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import messagePng from '../../assets/message.png';
//Formik Import
import { useFormik } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  certificate_no: Yup.string().required('Certificate Number is required'),
  student_name: Yup.string().required('Name is required'),
  student_email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  date: Yup.string().required('Date is required'),
  workshop_name: Yup.string().required('Workshop Name is required'),
  workshop_description: Yup.string().required(
    'Workshop Description is required'
  ),
});

const CertificateForm = () => {
  const [StudentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/certificate/fetch-student/${id}`).then((res) => {
      setStudentData(res.data[0]);
    });
  }, [id]);

  console.log(StudentData);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      certificate_no: StudentData?.VerificationCode,
      student_name: StudentData?.student_name,
      student_email: StudentData?.student_email,
      date: StudentData?.date,
      workshop_name: StudentData?.workshop_name,
      workshop_description: StudentData?.workshop_description,
    },
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(`${baseUrl}/certificate/edit-certificate/${id}`, values)
        .then((res) => {
          toast.success(res.data?.message);
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.data?.message);
          setLoading(false);
        });
    },
    validationSchema: formSchema,
  });
  const sendEmail = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/certificate/send-email `, formik?.values)
      .then((res) => {
        toast.success(res.data);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.data);
        setLoading(false);
      });
  };
  const handleDownload = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${baseUrl}/certificate/download-certificate/${id}`,
        {
          responseType: 'blob',
        }
      );
      if (res.status === 200) {
        setLoading(false);
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(
          pdfBlob,
          `${formik.values.student_name}_${formik.values.workshop_name}_${id}_certificate.pdf`
        );

        toast.success('Certificate Downloaded Successfully');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className=" container font-gilroy flex items-center justify-center mx-auto  mb-8">
      <ToastContainer />
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {loading && (
          <LinearProgress
            style={{
              position: 'absolute',
              left: '0',
              width: '100%',
              zIndex: '1000',
            }}
          />
        )}
        <form
          onSubmit={formik.handleSubmit}
          className="col-span-4 lg:col-span-8"
        >
          <div className=" rounded-lg  pb-12 ">
            <div className="bg-white shadow-lg rounded-lg p-2 lg:p-8 pb-12 ">
              <div className="col-span-5 lg:col-span-8 space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Certificate No
                    </label>
                    <div className="mt-1">
                      <input
                        id="certificate_no"
                        name="certificate_no"
                        placeholder="Certificate No"
                        type="text"
                        autoComplete="title"
                        value={formik.values.certificate_no}
                        onChange={formik.handleChange('certificate_no')}
                        onBlur={formik.handleBlur('certificate_no')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.certificate_no &&
                        formik.errors.certificate_no}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="student_name"
                        name="student_name"
                        placeholder="Student Name"
                        autoComplete="student_name"
                        onBlur={formik.handleBlur('student_name')}
                        value={formik.values.student_name}
                        onChange={formik.handleChange('student_name')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.student_name &&
                        formik.errors.student_name}
                    </div>
                  </div>
                </div>
                {/* Student Email */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Student Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={formik.values.student_email}
                      onChange={formik.handleChange('student_email')}
                      onBlur={formik.handleBlur('student_email')}
                      name="student_email"
                      type="email"
                      placeholder="Student Email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.student_email &&
                      formik.errors.student_email}
                  </div>
                </div>
                <hr className="my-4" />
                <label className="block text-sm font-bold text-indigo-700">
                  WorkShop Details
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* ROLL NO */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className="mt-1">
                      <input
                        value={formik.values.date}
                        onChange={formik.handleChange('date')}
                        onBlur={formik.handleBlur('date')}
                        name="roll_no"
                        placeholder="Workshop Date"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.date && formik.errors.date}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Workshop Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="workshop_name"
                      name="workshop_name"
                      placeholder="Workshop Name"
                      type="text"
                      onBlur={formik.handleBlur('workshop_name')}
                      value={formik.values.workshop_name}
                      onChange={formik.handleChange('workshop_name')}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.workshop_name &&
                      formik.errors.workshop_name}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    WorkShop Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="workshop_description"
                      name="workshop_description"
                      placeholder="WorkShop Description"
                      type="text"
                      rows="15"
                      onBlur={formik.handleBlur('workshop_description')}
                      value={formik.values.workshop_description}
                      onChange={formik.handleChange('workshop_description')}
                      className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.workshop_description &&
                      formik.errors.workshop_description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/*TODO: Download pdf file button */}
        <div className="col-span-4 p-1">
          <div className=" md:top-20 lg:sticky ">
            <div className="w-72  m-auto  max-w-sm">
              <div className="bg-white shadow-2xl rounded-3xl px-2">
                <h2 className="text-center text-gray-800 text-xl font-bold pt-6">
                  Certificate Actions
                </h2>
                <div className="w-5/6 m-auto">
                  <p className="text-center text-gray-500 pt-5">
                    You can send email to student or download attached
                    certificate from here.
                  </p>
                </div>
                <button
                  onClick={sendEmail}
                  className="grid grid-cols-4 w-full m-auto bg-indigo-50 mt-5 p-2 lg:p-4  rounded-2xl"
                >
                  <div className="col-span-1">
                    <img
                      className="w-12 lg:w-10"
                      src={messagePng}
                      alt="email icon"
                    />
                  </div>
                  <div className="col-span-2 pt-1">
                    <p className="text-gray-800 text-left font-bold lg:text-sm">
                      Send email
                    </p>
                    <p className="text-gray-500 text-xs">
                      {formik.values.student_email}
                    </p>
                  </div>
                </button>
                <div className="m-auto  p-2 mb-5  rounded-2xl  text-white text-center  shadow-bg-blue-700 ">
                  {loading ? (
                    <CircularProgress style={{ color: 'white' }} />
                  ) : (
                    <button
                      type="submit"
                      onClick={handleDownload}
                      className=" w-72 lg:w-5/6 m-auto mt-6 p-2 mb-5 bg-blue-700 hover:bg-indigo-500 flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-white  rounded-lg  "
                    >
                      {/* Send Email/Create Certificate
                        <span className="inline-flex justify-center items-center ml-2 w-10 h-5 text-xs font-semibold text-white bg-red-500 rounded-lg">
                          First
                        </span> */}
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
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <span className="ml-2">Download Certificate</span>
                    </button>
                  )}
                </div>
                <div className="m-auto  p-2 mb-5  rounded-2xl  text-white text-center shadow-bg-blue-700 ">
                  {loading ? (
                    <CircularProgress style={{ color: 'white' }} />
                  ) : (
                    <button
                      type="submit"
                      onClick={formik.handleSubmit}
                      className=" w-72 lg:w-5/6 m-auto mt-6 p-2 mb-5 bg-green-700 hover:bg-green-500 flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-white  rounded-lg  "
                    >
                      {/* Send Email/Create Certificate
                        <span className="inline-flex justify-center items-center ml-2 w-10 h-5 text-xs font-semibold text-white bg-red-500 rounded-lg">
                          First
                        </span> */}
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
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>

                      <span className="ml-2">Save Changes</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
