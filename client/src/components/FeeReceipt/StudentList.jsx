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

const StudentList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setLoading(true);
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios.get(`${baseUrl}/feereceipt/receive-student-list`).then((res) => {
      setData(res?.data);
      setRows(
        res?.data?.map((item) => {
          return {
            id: item?._id,
            receiptNo: item?.receiptNo,
            academic_year: item?.academic_year,
            roll_no: item?.roll_no,
            student_email: item?.student_email,
            student_division: item?.student_division,
            student_class: item?.student_class,
            student_course: item?.student_course,
            student_branch: item?.student_branch,
            student_name: item?.student_name,
            father_name: item?.father_name,
            mobile_number: item?.mobile_number,
            address_student: item?.address_student,
            amount_data: item?.amount_data,
            balance_fee_data: item?.balance_fee_data,
            other_fees: item?.other_fees,
            date_of_payment: item?.date_of_payment,
            bank_name: item?.bank_name,
            account_number: item?.account_number,
          };
        })
      );

      setLoading(false);
    });
  };

  const sendBulkMessage = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/feereceipt/send-bulk-message`, {
        data,
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
      .get(`${baseUrl}/feereceipt/download-as-zip`, {
        responseType: 'blob',
      })
      .then((res) => {
        // console.log(res.data);
        const blob = new Blob([res.data], { type: 'application/zip' });
        saveAs(blob, `Feereceipt_date_${dateTime}.zip`);
        toast.success('Receipts Downloaded Successfully');
        setLoading(false);
      })
      .catch((err) => {
        toast.error('Something went wrong');
        setLoading(false);
      });
  };
  console.log(rows);
  const columns = [
    {
      headerName: 'View/Download',
      field: 'id',
      width: 150,
      renderCell: (rowData) => (
        <Link to={`/dashboard/studentlist/${rowData?.row?.receiptNo}`}>
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
    { width: 150, headerName: 'Receipt No', field: 'receiptNo' },
    { width: 150, headerName: 'AcademicYear', field: 'academic_year' },
    { width: 150, headerName: 'RollNo', field: 'roll_no' },
    { width: 150, headerName: 'Email', field: 'student_email' },
    { width: 150, headerName: 'Division', field: 'student_division' },
    { width: 150, headerName: 'Class', field: 'student_class' },
    { width: 150, headerName: 'Course', field: 'student_course' },
    { width: 150, headerName: 'Branch', field: 'student_branch' },
    { width: 150, headerName: 'Student Name', field: 'student_name' },
    { width: 150, headerName: 'FatherName', field: 'father_name' },
    { width: 150, headerName: 'Phone No', field: 'mobile_number' },
    { width: 150, headerName: 'Address', field: 'address_student' },
    { width: 150, headerName: 'Fees Paid', field: 'amount_data' },
    { width: 150, headerName: 'Balance Fees', field: 'balance_fee_data' },
    { width: 150, headerName: 'Other Fees', field: 'other_fees' },
    { width: 150, headerName: 'DateOfPaymnent', field: 'date_of_payment' },
    { width: 150, headerName: 'Bank Name', field: 'bank_name' },
    { width: 150, headerName: 'Account Number', field: 'account_number' },
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
          <div className="relative mb-10 mx-20">
            {loading ? (
              <CircularProgress />
            ) : (
              <div className="flex items-center justify-start gap-3">
                {' '}
                <button
                  disabled={data?.length === 0}
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
                  <span className="ml-2">Send Email to All Students</span>
                </button>
                <button
                  disabled={data?.length === 0}
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
};

export default StudentList;
