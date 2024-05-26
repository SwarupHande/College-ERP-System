import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
// Api Url
import baseUrl from '../../Utils/baseUrl';
// XLSX Import
import * as XLSX from 'xlsx';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

//Notification Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EXTENSIONS = ['xlsx', 'xls', 'csv'];

const CertificateRecord = () => {
  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();
  const [tableRows, setTableRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const [loading, setLoading] = useState(false);

  const getExention = (file) => {
    const parts = file.name.split('.');
    const extension = parts[parts?.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };
  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };
  const convertToJsonTable = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      let uniqueId = Math.floor(Math.random() * 100000000000000000);
      rowData['id'] = uniqueId;
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });

      rows.push(rowData);
    });
    return rows;
  };

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: 'binary' });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDefs(heads);
      //removing header
      fileData.splice(0, 1);

      setData(convertToJson(headers, fileData));
      setTableRows(convertToJsonTable(headers, fileData));
      const tableColumns = heads.map((head) => {
        return {
          ...head,
          width: 200,
        };
      });
      setTableColumns(tableColumns);
    };

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert('Invalid file input, Select Excel, CSV file');
      }
    } else {
      setData([]);
      setTableRows([]);
      setColDefs([]);
    }
  };

  const navigate = useNavigate();

  const handleSaveToDatabase = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/certificate/append_database`, data)
      .then((res) => {
        toast.success(res.data);
        setTimeout(() => {
          setLoading(false);
          navigate('/dashboard/certificatelist');
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data);
      });
  };

  const onDrop = useCallback((DroppedFiles) => {
    const file = DroppedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: 'binary' });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDefs(heads);
      //removing header
      fileData.splice(0, 1);

      setData(convertToJson(headers, fileData));
      setTableRows(convertToJsonTable(headers, fileData));
      const tableColumns = heads.map((head) => {
        return {
          ...head,
          width: 200,
        };
      });
      setTableColumns(tableColumns);
    };

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert('Invalid file input, Select Excel, CSV file');
      }
    } else {
      setData([]);
      setColDefs([]);
    }
  }, []);

  // Dropzone
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel':
        ['.xlsx', '.xls', '.csv'],
    },
    onDrop,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <ToastContainer />
      <div className="relative pb-20 mx-20">
        <div className="flex flex-col max-w-screen-xl py-24 mx-auto lg:flex-row md:items-center ">
          <div className="relative flex-shrink-0 text-center lg:w-6/12 lg:pr-12 lg:text-left">
            <strong className="max-w-3xl text-3xl leading-snug  md:text-6xl">
              Student's Certificates Record
            </strong>
            <p className="max-w-lg mx-auto text-sm font-medium text-gray-500  lg:my-8 lg:text-lg lg:mx-0">
              Import data from excel, csv into table
            </p>
          </div>
          <div className="relative flex flex-col justify-center mt-12 lg:mt-0">
            {' '}
            <div
              className="relative flex flex-col items-center justify-center max-w-3xl p-20 border-2 border-dashed border-slate-500 md:justify-end lg:max-w-none"
              {...getRootProps()}
            >
              <input
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                {...getInputProps()}
              />
              <p className="text-sm font-medium text-center text-gray-500">
                Drag 'n' drop some files here, or click to select files
              </p>
              <em className="mt-4 text-sm font-medium text-center text-gray-500">
                (Only *.xlsx, *.xls and *.csv files will be accepted)
              </em>
              <aside className="w-full max-w-sm mt-6 lg:max-w-none">
                <h4 className="font-semibold text-gray-900">Accepted files</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {acceptedFileItems}
                </ul>
              </aside>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 sm:flex-row lg:justify-start ">
              <span className="items-center text-lg font-medium text-gray-500">
                Or
              </span>
              <input
                className="px-8 text-sm font-bold text-gray-500 transition duration-300 border-0 rounded-lg cursor-pointer bg-primary-500 focus:outline-none hover:bg-primary-700"
                placeholder="Choose Files"
                type="file"
                onChange={importExcel}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          {loading ? (
            <div className="items-center m-5 ">
              <CircularProgress
                style={{
                  color: '#1a202c',
                }}
              />
            </div>
          ) : (
            <>
              {loading ? (
                <CircularProgress />
              ) : (
                <button
                  disabled={!data}
                  onClick={handleSaveToDatabase}
                  className="flex items-center justify-center p-3 mb-5 rounded-full neumorphism-shadow github-link focus:outline-none focus:ring"
                >
                  <img
                    className="w-5 h-5 mx-2 text-gray-500"
                    alt="save_icon"
                    src="https://img.icons8.com/ios-glyphs/30/null/save--v1.png"
                  />
                  <span className="ml-2">Save to Database</span>
                </button>
              )}
            </>
          )}
        </div>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={tableRows ? tableRows : []}
            columns={tableColumns ? tableColumns : []}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default CertificateRecord;
