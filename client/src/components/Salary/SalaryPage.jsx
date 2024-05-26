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
  email: Yup.string().email('Invalid email').required('Required'),
  mobile: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
  sdrn: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  department: Yup.string().required('Required'),
  date_of_joining: Yup.string().required('Required'),
  basic: Yup.string().required('Required'),
  dearness_pay: Yup.string().required('Required'),
  dearness_allowance: Yup.string().required('Required'),
  cla: Yup.string().required('Required'),
  ta: Yup.string().required('Required'),
  hra: Yup.string().required('Required'),
  others_1: Yup.string().required('Required'),
  pf_mgmt_share: Yup.string().required('Required'),
  arrears: Yup.string().required('Required'),
  others: Yup.string().required('Required'),
  designation: Yup.string().required('Required'),
  acc_no: Yup.string().required('Required'),
  days_present: Yup.string().required('Required'),
  pt: Yup.string().required('Required'),
  it: Yup.string().required('Required'),
  wpl: Yup.string().required('Required'),
  pf: Yup.string().required('Required'),
  loan: Yup.string().required('Required'),
  wc: Yup.string().required('Required'),
  lic: Yup.string().required('Required'),
  others_dec: Yup.string().required('Required'),
  mc: Yup.string().required('Required'),
  gr_insu: Yup.string().required('Required'),
  hr: Yup.string().required('Required'),
  advance: Yup.string().required('Required'),
  gross: Yup.string().required('Required'),
  total_dec: Yup.string().required('Required'),
  net_pay: Yup.string().required('Required'),
});
const SalaryPage = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { sdrn } = useParams();

  useEffect(() => {
    axios.get(`${baseUrl}/salary/fetch-staff/${sdrn}`).then((res) => {
      setStaffData(res.data[0]);
    });
  }, [sdrn]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: staffData?.email,
      mobile: staffData?.mobile,
      date: staffData?.date,
      sdrn: staffData?.sdrn,
      name: staffData?.name,
      department: staffData?.department,
      date_of_joining: staffData?.date_of_joining,
      basic: staffData?.basic,
      dearness_pay: staffData?.dearness_pay,
      dearness_allowance: staffData?.dearness_allowance,
      cla: staffData?.cla,
      ta: staffData?.ta,
      hra: staffData?.hra,
      others_1: staffData?.others_1,
      pf_mgmt_share: staffData?.pf_mgmt_share,
      arrears: staffData?.arrears,
      others: staffData?.others,
      designation: staffData?.designation,
      acc_no: staffData?.acc_no,
      days_present: staffData?.days_present,
      pt: staffData?.pt,
      it: staffData?.it,
      wpl: staffData?.wpl,
      pf: staffData?.pf,
      loan: staffData?.loan,
      wc: staffData?.wc,
      lic: staffData?.lic,
      others_dec: staffData?.others_dec,
      mc: staffData?.mc,
      gr_insu: staffData?.gr_insu,
      hr: staffData?.hr,
      advance: staffData?.advance,
      gross: staffData?.gross,
      total_dec: staffData?.total_dec,
      net_pay: staffData?.net_pay,
    },
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      axios
        .post(`${baseUrl}/salary/edit-slip/${sdrn} `, values)
        .then((res) => {
          toast.success(res?.data?.message);
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
      .post(`${baseUrl}/salary/send-email `, formik?.values)
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
      .get(`${baseUrl}/salary/download-salaryslip/${sdrn}`, {
        responseType: 'blob',
      })
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(
          pdfBlob,
          `${formik.values.name}_${formik.values.date
            .split('/')
            .reverse()
            .join('-')}_${sdrn}_salaryslip.pdf`
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
    <div className=" container font-gilroy flex items-center justify-center mx-auto px-3 mb-8">
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
                  {/* Receipt No */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      SDRN
                    </label>
                    <div className="mt-1">
                      <input
                        id="sdrn"
                        name="sdrn"
                        placeholder="SDRN"
                        type="text"
                        autoComplete="title"
                        onBlur={formik.handleBlur('sdrn')}
                        value={formik.values.sdrn}
                        onChange={formik.handleChange('sdrn')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Days Present
                    </label>
                    <div className="mt-1">
                      <input
                        id="days_present"
                        name="days_present"
                        placeholder="No. of days present"
                        type="text"
                        autoComplete="title"
                        onBlur={formik.handleBlur('days_present')}
                        value={formik.values.days_present}
                        onChange={formik.handleChange('days_present')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.days_present && formik.errors.days_present}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="student_name"
                        placeholder="Staff Name"
                        autoComplete="name"
                        onBlur={formik.handleBlur('name')}
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
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
                        value={formik.values.mobile}
                        onChange={formik.handleChange('mobile')}
                        onBlur={formik.handleBlur('mobile')}
                        name="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Father Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Department
                    </label>
                    <div className="mt-1">
                      <input
                        id="department"
                        name="department"
                        placeholder="Department"
                        type="text"
                        onBlur={formik.handleBlur('department')}
                        value={formik.values.department}
                        onChange={formik.handleChange('department')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.department && formik.errors.department}
                    </div>
                  </div>
                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Joining
                    </label>
                    <div className="mt-1">
                      <input
                        id="date_of_joining"
                        name="date_of_joining"
                        placeholder="Date of Joining"
                        type="text"
                        onBlur={formik.handleBlur('date_of_joining')}
                        value={formik.values.date_of_joining}
                        onChange={formik.handleChange('date_of_joining')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.date_of_joining &&
                        formik.errors.date_of_joining}
                    </div>
                  </div>
                </div>

                {/* Student Email */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Staff Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}
                      name="email"
                      type="email"
                      placeholder="Staff Email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <hr className="my-4" />
                <label className="block text-sm font-bold text-indigo-700">
                  EARNINGS
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* ROLL NO */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      BASIC
                    </label>
                    <div className="mt-1">
                      <input
                        value={formik.values.basic}
                        onChange={formik.handleChange('basic')}
                        onBlur={formik.handleBlur('basic')}
                        name="basic"
                        type="text"
                        placeholder="BASIC"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.basic && formik.errors.basic}
                    </div>
                  </div>
                  {/* Student Class */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      DEARNESS PAY
                    </label>
                    <div className="mt-1">
                      <input
                        id="dearness_pay"
                        name="dearness_pay"
                        placeholder="DEARNESS PAY"
                        type="text"
                        onBlur={formik.handleBlur('dearness_pay')}
                        value={formik.values.dearness_pay}
                        onChange={formik.handleChange('dearness_pay')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.dearness_pay &&
                        formik.errors.dearness_pay}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Branch */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      DEARNESS ALLOWANCE
                    </label>
                    <div className="mt-1">
                      <input
                        id="dearness_allowance"
                        name="dearness_allowance"
                        placeholder="DEARNESS ALLOWANCE"
                        type="text"
                        onBlur={formik.handleBlur('dearness_allowance')}
                        value={formik.values.dearness_allowance}
                        onChange={formik.handleChange('dearness_allowance')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.dearness_allowance &&
                        formik.errors.dearness_allowance}
                    </div>
                  </div>
                  {/* Student Course */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CLA
                    </label>
                    <div className="mt-1">
                      <input
                        id="cla"
                        name="cla"
                        placeholder="CLA"
                        type="text"
                        onBlur={formik.handleBlur('cla')}
                        value={formik.values.cla}
                        onChange={formik.handleChange('cla')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.cla && formik.errors.cla}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Student Division */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      TA
                    </label>
                    <div className="mt-1">
                      <input
                        id="ta"
                        name="ta"
                        placeholder="TA"
                        type="text"
                        onBlur={formik.handleBlur('ta')}
                        value={formik.values.ta}
                        onChange={formik.handleChange('ta')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.ta && formik.errors.ta}
                    </div>
                  </div>
                  {/* Academic Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      HRA
                    </label>
                    <div className="mt-1">
                      <input
                        id="hra"
                        name="hra"
                        placeholder="HRA"
                        type="text"
                        onBlur={formik.handleBlur('hra')}
                        value={formik.values.hra}
                        onChange={formik.handleChange('hra')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.hra && formik.errors.hra}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      OTHERS 1
                    </label>
                    <div className="mt-1">
                      <input
                        id="others_1"
                        name="others_1"
                        placeholder="Others 1"
                        type="text"
                        onBlur={formik.handleBlur('others_1')}
                        value={formik.values.others_1}
                        onChange={formik.handleChange('others_1')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.others_1 && formik.errors.others_1}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PF Mgmt. Share
                    </label>
                    <div className="mt-1">
                      <input
                        id="pf_mgmt_share"
                        name="pf_mgmt_share"
                        placeholder="PF Mgmt. Share"
                        type="text"
                        onBlur={formik.handleBlur('pf_mgmt_share')}
                        value={formik.values.pf_mgmt_share}
                        onChange={formik.handleChange('pf_mgmt_share')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.pf_mgmt_share &&
                        formik.errors.pf_mgmt_share}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ARREARS
                    </label>
                    <div className="mt-1">
                      <input
                        id="arrears"
                        name="arrears"
                        placeholder="Arrears"
                        type="text"
                        onBlur={formik.handleBlur('arrears')}
                        value={formik.values.arrears}
                        onChange={formik.handleChange('arrears')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.arrears && formik.errors.arrears}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      OTHERS
                    </label>
                    <div className="mt-1">
                      <input
                        id="others"
                        name="others"
                        placeholder="Others "
                        type="text"
                        onBlur={formik.handleBlur('others')}
                        value={formik.values.others}
                        onChange={formik.handleChange('others')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.others && formik.errors.others}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    GROSS
                  </label>
                  <div className="mt-1">
                    <input
                      id="gross"
                      name="gross"
                      placeholder="Gross"
                      type="text"
                      onBlur={formik.handleBlur('gross')}
                      value={formik.values.gross}
                      onChange={formik.handleChange('gross')}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-red-400 mb-2">
                    {formik.touched.gross && formik.errors.gross}
                  </div>
                </div>
                <hr className="my-4" />
                <label className="block text-sm font-bold text-indigo-700">
                  DEDUCTIONS
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Amount paid */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PT
                    </label>
                    <div className="mt-1">
                      <input
                        id="pt"
                        name="pt"
                        placeholder="PT"
                        type="text"
                        onBlur={formik.handleBlur('pt')}
                        value={formik.values.pt}
                        onChange={formik.handleChange('pt')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.pt && formik.errors.pt}
                    </div>
                  </div>
                  {/* Date of payment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      IT
                    </label>
                    <div className="mt-1">
                      <input
                        id="it"
                        name="it"
                        placeholder="IT"
                        onBlur={formik.handleBlur('it')}
                        value={formik.values.it}
                        onChange={formik.handleChange('it')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="text-red-400 mb-2">
                      {formik.touched.it && formik.errors.it}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Balance Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      WPL
                    </label>
                    <div className="mt-1">
                      <input
                        id="wpl"
                        name="wpl"
                        placeholder="WPL"
                        type="text"
                        onBlur={formik.handleBlur('wpl')}
                        value={formik.values.wpl}
                        onChange={formik.handleChange('wpl')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Other fee */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PF
                    </label>
                    <div className="mt-1">
                      <input
                        id="pf"
                        name="pf"
                        placeholder="PF"
                        type="text"
                        onBlur={formik.handleBlur('pf')}
                        value={formik.values.pf}
                        onChange={formik.handleChange('pf')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Bank Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Loan
                    </label>
                    <div className="mt-1">
                      <input
                        id="loan"
                        name="loan"
                        placeholder="Loan"
                        type="text"
                        onBlur={formik.handleBlur('loan')}
                        value={formik.values.loan}
                        onChange={formik.handleChange('loan')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {/* Bank Account Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      WC
                    </label>
                    <div className="mt-1">
                      <input
                        id="wc"
                        name="wc"
                        placeholder="WC"
                        type="text"
                        onBlur={formik.handleBlur('wc')}
                        value={formik.values.wc}
                        onChange={formik.handleChange('wc')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      LIC
                    </label>
                    <div className="mt-1">
                      <input
                        id="lic"
                        name="lic"
                        placeholder="LIC"
                        type="text"
                        onBlur={formik.handleBlur('lic')}
                        value={formik.values.lic}
                        onChange={formik.handleChange('lic')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Others
                    </label>
                    <div className="mt-1">
                      <input
                        id="others_dec"
                        name="others_dec"
                        placeholder="Others"
                        type="text"
                        onBlur={formik.handleBlur('others_dec')}
                        value={formik.values.others_dec}
                        onChange={formik.handleChange('others_dec')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      MC
                    </label>
                    <div className="mt-1">
                      <input
                        id="mc"
                        name="mc"
                        placeholder="MC"
                        type="text"
                        onBlur={formik.handleBlur('mc')}
                        value={formik.values.mc}
                        onChange={formik.handleChange('mc')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gr. Insu
                    </label>
                    <div className="mt-1">
                      <input
                        id="gr_insu"
                        name="gr_insu"
                        placeholder="Gr. Insu"
                        type="text"
                        onBlur={formik.handleBlur('gr_insu')}
                        value={formik.values.gr_insu}
                        onChange={formik.handleChange('gr_insu')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      HR
                    </label>
                    <div className="mt-1">
                      <input
                        id="hr"
                        name="hr"
                        placeholder="HR"
                        type="text"
                        onBlur={formik.handleBlur('hr')}
                        value={formik.values.hr}
                        onChange={formik.handleChange('hr')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Advance
                    </label>
                    <div className="mt-1">
                      <input
                        id="advance"
                        name="advance"
                        placeholder="Advance"
                        type="text"
                        onBlur={formik.handleBlur('advance')}
                        value={formik.values.advance}
                        onChange={formik.handleChange('advance')}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Total Deduction
                  </label>
                  <div className="mt-1">
                    <input
                      id="total_dec"
                      name="total_dec"
                      placeholder="Total Deduction"
                      type="text"
                      onBlur={formik.handleBlur('total_dec')}
                      value={formik.values.total_dec}
                      onChange={formik.handleChange('total_dec')}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Net Pay
                  </label>
                  <div className="mt-1">
                    <input
                      id="net_pay"
                      name="net_pay"
                      placeholder="Net Pay"
                      type="text"
                      onBlur={formik.handleBlur('net_pay')}
                      value={formik.values.net_pay}
                      onChange={formik.handleChange('net_pay')}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Download pdf file button */}
        <div className="col-span-4 p-1">
          <div className=" md:top-20 sticky ">
            <div className="w-72  m-auto  max-w-sm">
              <div className="bg-white shadow-2xl rounded-3xl px-2">
                <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
                  Salary Slip Actions
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
                    <p className="text-gray-500 text-xs">
                      {formik.values.email}
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
                      <span className="ml-2">Download Slip</span>
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

export default SalaryPage;
