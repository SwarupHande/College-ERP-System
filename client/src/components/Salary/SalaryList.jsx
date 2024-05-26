import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../Utils/baseUrl';
// File saver Import
import { saveAs } from 'file-saver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
//Progress Bar Import
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentList() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setLoading(true);
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios.get(`${baseUrl}/salary/receive-staff-list`).then((res) => {
      setRows(
        res?.data?.map((item) => {
          return {
            id: item?._id,
            email: item?.email,
            mobile: item?.mobile,
            date: item?.date,
            sdrn: item?.sdrn,
            name: item?.name,
            department: item?.department,
            date_of_joining: item?.date_of_joining,
            basic: item?.basic,
            dearness_pay: item?.dearness_pay,
            dearness_allowance: item?.dearness_allowance,
            cla: item?.cla,
            ta: item?.ta,
            hra: item?.hra,
            others_1: item?.others_1,
            pf_mgmt_share: item?.pf_mgmt_share,
            arrears: item?.arrears,
            others: item?.others,
            designation: item?.designation,
            acc_no: item?.acc_no,
            days_present: item?.days_present,
            pt: item?.pt,
            it: item?.it,
            wpl: item?.wpl,
            pf: item?.pf,
            loan: item?.loan,
            wc: item?.wc,
            lic: item?.lic,
            others_dec: item?.others_dec,
            mc: item?.mc,
            gr_insu: item?.gr_insu,
            hr: item?.hr,
            advance: item?.advance,
            gross: item?.gross,
            total_dec: item?.total_dec,
            net_pay: item?.net_pay,
          };
        })
      );
      setLoading(false);
    });
  };

  const sendBulkMessage = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/salary/send-bulk-message`, {
        rows,
      })
      .then((res) => {
        // console.log(res.data);
        toast.info(res.data);
        setLoading(false);
      });
  };

  // Date
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const dateTime = date;

  const downloadAsZip = () => {
    setLoading(true);
    axios
      .get(`${baseUrl}/salary/download-as-zip`, {
        responseType: 'blob',
      })
      .then((res) => {
        // console.log(res.data);
        const blob = new Blob([res.data], { type: 'application/zip' });
        saveAs(blob, `SalarySlips_date_${dateTime}.zip`);
        toast.success('Salary Slips Downloaded Successfully');
        setLoading(false);
      })
      .catch((err) => {
        toast.error('Something went wrong');
        setLoading(false);
      });
  };
  const columns = [
    {
      headerName: 'View/Download',
      field: 'id',
      width: 100,
      renderCell: (rowData) => (
        <Link to={`/dashboard/salarylist/${rowData?.row?.sdrn}`}>
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </Link>
      ),
    },
    { width: 150, headerName: 'Date', field: 'date' },
    { width: 150, headerName: 'SDRN', field: 'sdrn' },
    { width: 150, headerName: 'Name', field: 'name' },
    { width: 150, headerName: 'Email', field: 'email' },
    { width: 150, headerName: 'Mobile No.', field: 'mobile' },
    { width: 150, headerName: 'Department', field: 'department' },
    { width: 150, headerName: 'Date of Joining', field: 'date_of_joining' },
    { width: 150, headerName: 'Basic', field: 'basic' },
    { width: 150, headerName: 'Dearness Pay', field: 'dearness_pay' },
    {
      width: 150,
      headerName: 'Dearness Allowance',
      field: 'dearness_allowance',
    },
    { width: 150, headerName: 'CLA', field: 'cla' },
    { width: 150, headerName: 'TA', field: 'ta' },
    { width: 150, headerName: 'HRA', field: 'hra' },
    { width: 150, headerName: 'Others 1', field: 'others_1' },
    { width: 150, headerName: 'Pf Mgmt Share', field: 'pf_mgmt_share' },
    { width: 150, headerName: 'Arrears', field: 'arrears' },
    { width: 150, headerName: 'Others', field: 'others' },
    { width: 150, headerName: 'Designation', field: 'designation' },
    { width: 150, headerName: 'Acc No', field: 'acc_no' },
    { width: 150, headerName: 'Days Present', field: 'days_present' },
    { width: 150, headerName: 'PT', field: 'pt' },
    { width: 150, headerName: 'IT', field: 'it' },
    { width: 150, headerName: 'WPL', field: 'wpl' },
    { width: 150, headerName: 'PF', field: 'pf' },
    { width: 150, headerName: 'Loan', field: 'loan' },
    { width: 150, headerName: 'WC', field: 'wc' },
    { width: 150, headerName: 'LIC', field: 'lic' },
    { width: 150, headerName: 'Others Deductions', field: 'others_dec' },
    { width: 150, headerName: 'MC', field: 'mc' },
    { width: 150, headerName: 'Gr Insurance', field: 'gr_insu' },
    { width: 150, headerName: 'HR', field: 'hr' },
    { width: 150, headerName: 'Advance', field: 'advance' },
    { width: 150, headerName: 'Gross Amount', field: 'gross' },
    { width: 150, headerName: 'Total Deductions', field: 'total_dec' },
    { width: 150, headerName: 'Net Pay', field: 'net_pay' },
  ];

  return (
    <div className="h-screen pt-12">
      <ToastContainer />
      {loading ? (
        <LinearProgress
          style={{
            position: 'absolute',
            left: '0',
            zIndex: '1000',
          }}
        />
      ) : (
        <>
          <div className="relative pb-3 mx-20">
            {loading ? (
              <CircularProgress />
            ) : (
              <div className="flex items-center justify-start gap-3">
                {' '}
                <button
                  disabled={rows?.length === 0}
                  onClick={sendBulkMessage}
                  className="flex items-center justify-center p-3 mb-10 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-2 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                  <span className="ml-2">Send Email to All Staffs</span>
                </button>
                <button
                  disabled={rows?.length === 0}
                  onClick={downloadAsZip}
                  className="flex items-center justify-center p-3 mb-10 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-2 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span className="ml-2">Download all records as Zip</span>
                </button>
              </div>
            )}

            <Box sx={{ height: 500, width: '100%', marginBottom: '20px' }}>
              <DataGrid
                rows={rows?.length > 0 ? rows : []}
                columns={columns?.length > 0 ? columns : []}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </>
      )}
    </div>
  );
}
