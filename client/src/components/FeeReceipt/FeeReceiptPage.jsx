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
  receipt_no: Yup.string().required('Receipt No is required'),
  student_name: Yup.string().required('Student Name is required'),
  roll_no: Yup.string().required('Student Roll No is required'),
  mobile_number: Yup.string().required('Mobile Number is required'),
  student_email: Yup.string().required('Student Email is required'),
  academic_year: Yup.string().required('Academic Year is required'),
  student_class: Yup.string().required('Student Class is required'),
  student_branch: Yup.string().required('Student Branch is required'),
  student_division: Yup.string().required('Student Division is required'),
  student_course: Yup.string().required('Student Course is required'),
  address_student: Yup.string().required('Student Address is required'),
  father_name: Yup.string().required('Student Father Name is required'),
  amount_data: Yup.string().required('Amount is required'),
  date_of_payment: Yup.string().required('Date of Payment is required'),
});
const FeeReceiptPage = () => {
  const [StudentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/feereceipt/fetch-student/${id}`).then((res) => {
      setStudentData(res.data[0]);
    });
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      receipt_no: StudentData?.receiptNo,
      student_name: StudentData?.student_name,
      roll_no: StudentData?.roll_no,
      mobile_number: StudentData?.mobile_number,
      student_email: StudentData?.student_email,
      academic_year: StudentData?.academic_year,
      student_class: StudentData?.student_class,
      student_division: StudentData?.student_division,
      student_branch: StudentData?.student_branch,
      student_course: StudentData?.student_course,
      address_student: StudentData?.address_student,
      father_name: StudentData?.father_name,
      amount_data: StudentData?.amount_data,
      date_of_payment: StudentData?.date_of_payment,
      bank_name: StudentData?.bank_name,
      account_number: StudentData?.account_number,
      other_fees: StudentData?.other_fees,
      balance_fee_data: StudentData?.balance_fee_data,
    },
    onSubmit: (values) => {
      // console.log(values);
      setLoading(true);
      axios
        .post(`${baseUrl}/feereceipt/edit-receipt/${id} `, values)
        .then((res) => {
          toast.success(res.data?.message);
          // console.log(res);
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
      .post(`${baseUrl}/feereceipt/send-email`, formik?.values)
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
  const handleDownload = () => {
    setLoading(true);
    axios
      .get(`${baseUrl}/feereceipt/download-feereceipt/${id}`, {
        responseType: 'blob',
      })
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(
          pdfBlob,
          `${formik.values.student_name}_${formik.values.roll_no}_${id}_feereceipt.pdf`
        );
        toast.success('Downloaded Successfully');
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Download Failed');
        setLoading(false);
      });
  };

  return (
    <div className=" container font-gilroy flex items-center justify-center mx-auto  mb-8">
      <ToastContainer />
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {loading && (
          <LinearProgress
            style={{
              position: 'absolute',
              top: '80px',
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
                  {/* Receipt No */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Receipt No
                    </label>
                    <div className="mt-1">
                      <input
                        id="receipt_no"
                        name="receipt_no"
                        placeholder="Receipt No"
                        type="text"
                        autoComplete="title"
                        onBlur={formik.handleBlur('receipt_no')}
                        value={formik.values.receipt_no}
                        onChange={formik.handleChange('receipt_no')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.receipt_no && formik.errors.receipt_no}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Name */}
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
                  {/* Mobile Number */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <div className="mt-1">
                      <input
                        value={formik.values.mobile_number}
                        onChange={formik.handleChange('mobile_number')}
                        onBlur={formik.handleBlur('mobile_number')}
                        name="mobile_number"
                        type="text"
                        placeholder="Mobile Number"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.mobile_number &&
                        formik.errors.mobile_number}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Father Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="father_name"
                        name="father_name"
                        placeholder="Father Name"
                        type="text"
                        onBlur={formik.handleBlur('father_name')}
                        value={formik.values.father_name}
                        onChange={formik.handleChange('father_name')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.father_name && formik.errors.father_name}
                    </div>
                  </div>
                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="address_student"
                        name="address_student"
                        placeholder="Address"
                        type="text"
                        onBlur={formik.handleBlur('address_student')}
                        value={formik.values.address_student}
                        onChange={formik.handleChange('address_student')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.address_student &&
                        formik.errors.address_student}
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
                  Academic Details
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* ROLL NO */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Roll no
                    </label>
                    <div className="mt-1">
                      <input
                        value={formik.values.roll_no}
                        onChange={formik.handleChange('roll_no')}
                        onBlur={formik.handleBlur('roll_no')}
                        name="roll_no"
                        type="text"
                        placeholder="Roll no"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.roll_no && formik.errors.roll_no}
                    </div>
                  </div>
                  {/* Student Class */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Class
                    </label>
                    <div className="mt-1">
                      <input
                        id="student_class"
                        name="student_class"
                        placeholder="Student Class"
                        type="text"
                        onBlur={formik.handleBlur('student_class')}
                        value={formik.values.student_class}
                        onChange={formik.handleChange('student_class')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.student_class &&
                        formik.errors.student_class}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Branch */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Branch
                    </label>
                    <div className="mt-1">
                      <input
                        id="student_branch"
                        name="student_branch"
                        placeholder="Student Branch"
                        type="text"
                        onBlur={formik.handleBlur('student_branch')}
                        value={formik.values.student_branch}
                        onChange={formik.handleChange('student_branch')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.student_branch &&
                        formik.errors.student_branch}
                    </div>
                  </div>
                  {/* Student Course */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Course
                    </label>
                    <div className="mt-1">
                      <input
                        id="student_course"
                        name="student_course"
                        placeholder="Student Course"
                        type="text"
                        onBlur={formik.handleBlur('student_course')}
                        value={formik.values.student_course}
                        onChange={formik.handleChange('student_course')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.student_course &&
                        formik.errors.student_course}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Division */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Division
                    </label>
                    <div className="mt-1">
                      <input
                        id="student_division"
                        name="student_division"
                        placeholder="Student Division"
                        type="text"
                        onBlur={formik.handleBlur('student_division')}
                        value={formik.values.student_division}
                        onChange={formik.handleChange('student_division')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.student_division &&
                        formik.errors.student_division}
                    </div>
                  </div>
                  {/* Academic Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Academic Year
                    </label>
                    <div className="mt-1">
                      <input
                        id="academic_year"
                        name="academic_year"
                        placeholder="Academic Year"
                        type="text"
                        onBlur={formik.handleBlur('academic_year')}
                        value={formik.values.academic_year}
                        onChange={formik.handleChange('academic_year')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.academic_year &&
                        formik.errors.academic_year}
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <label className="block text-sm font-bold text-indigo-700">
                  Bank Details
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Amount paid */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Amount paid
                    </label>
                    <div className="mt-1">
                      <input
                        id="amount_data"
                        name="amount_data"
                        placeholder="Amount paid"
                        type="text"
                        onBlur={formik.handleBlur('amount_data')}
                        value={formik.values.amount_data}
                        onChange={formik.handleChange('amount_data')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.amount_data && formik.errors.amount_data}
                    </div>
                  </div>
                  {/* Date of payment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of payment
                    </label>
                    <div className="mt-1">
                      <input
                        id="date_of_payment"
                        name="date_of_payment"
                        placeholder="Date of payment"
                        onBlur={formik.handleBlur('date_of_payment')}
                        value={formik.values.date_of_payment}
                        onChange={formik.handleChange('date_of_payment')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.date_of_payment &&
                        formik.errors.date_of_payment}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Balance Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Balance Amount
                    </label>
                    <div className="mt-1">
                      <input
                        id="balance_fee_data"
                        name="balance_fee_data"
                        placeholder="Balance Amount"
                        type="text"
                        onBlur={formik.handleBlur('balance_fee_data')}
                        value={formik.values.balance_fee_data}
                        onChange={formik.handleChange('balance_fee_data')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Other fee */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Other fee
                    </label>
                    <div className="mt-1">
                      <input
                        id="other_fees"
                        name="other_fees"
                        placeholder="Other fee"
                        type="text"
                        onBlur={formik.handleBlur('other_fees')}
                        value={formik.values.other_fees}
                        onChange={formik.handleChange('other_fees')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Bank Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bank Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="bank_name"
                        name="bank_name"
                        placeholder="Bank Name"
                        type="text"
                        onBlur={formik.handleBlur('bank_name')}
                        value={formik.values.bank_name}
                        onChange={formik.handleChange('bank_name')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {/* Bank Account Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bank Account Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="account_number"
                        name="account_number"
                        placeholder="Bank Account Number"
                        type="text"
                        onBlur={formik.handleBlur('account_number')}
                        value={formik.values.account_number}
                        onChange={formik.handleChange('account_number')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* TODO: Download pdf file button */}
        <div className="col-span-4 p-1">
          <div className=" md:top-20 sticky ">
            <div className="w-72  m-auto  max-w-sm">
              <div className="bg-white shadow-2xl rounded-3xl px-2">
                <h2 className="text-center text-gray-800 text-xl font-bold pt-6">
                  Fee Receipt Actions
                </h2>
                <div className="w-5/6 m-auto">
                  <p className="text-center text-gray-500 pt-5">
                    You can download fee receipt for <strong>Office use</strong>{' '}
                    from here.
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
                    <p className="text-gray-500 text-xs ">
                      {formik.values.student_email}
                    </p>
                  </div>
                </button>
                <div className="m-auto  p-2 mb-5  rounded-2xl  text-white text-center shadow-bg-blue-700 ">
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
                      <span className="ml-2">Download Receipt</span>
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

export default FeeReceiptPage;
