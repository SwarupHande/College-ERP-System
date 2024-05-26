import axios from 'axios';
import { useState } from 'react';
import baseUrl from '../../Utils/baseUrl';
import LinearProgress from '@mui/material/LinearProgress';

const CertificateValidation = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const searchCertificate = () => {
    setLoading(true);
    axios
      .get(`${baseUrl}/certificate/search-certificate?search=${search}`, {})
      .then((res) => {
        setSearchResult(res.data[0]);
        setLoading(false);
      });
  };

  return (
    <div className="flex   flex-col p-2 py-24  h-screen">
      <div className=" items-center bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 md:w-[40vw] w-full mx-auto flex rounded-full shadow-lg p-2 mb-5 sticky">
        <input
          className="font-bold  rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="Enter Certificate ID"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchCertificate();
            }
          }}
        />

        <button
          onClick={searchCertificate}
          className="bg-indigo-600 text-white p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="transform pt-20 transition-transform duration-300 ease-in-out hover:-translate-y-2  w-full p-4">
        <h3 className=" text-2xl font-bold text-center ">
          {searchResult ? (
            <>
              Certificate ID:{' '}
              <span className="text-indigo-600">
                {searchResult.VerificationCode}
              </span>
            </>
          ) : (
            'No Certificate Found'
          )}
        </h3>
        <span className="text-center text-gray-500">
          {loading ? (
            <LinearProgress />
          ) : (
            <>
              {searchResult ? (
                <div className=" shadow-lg  shadow-gray-800 rounded-xl w-full max-w-2xl  mx-auto bg-white ">
                  <div className=" bg-white rounded-xl p-4 flex flex-col  ">
                    <div className="mb-8">
                      <p className="text-sm text-red-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                            clipRule="evenodd"
                          />
                        </svg>

                        {searchResult.date}
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {searchResult.workshop_name}
                      </div>
                      <p className="text-gray-700 text-base">
                        {searchResult.workshop_description}
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-900 ">
                        <span className="text-gray-600">Completed By: </span>{' '}
                        {searchResult.student_name}
                      </p>
                      <p className="text-gray-600">
                        <span className="text-gray-600">On date: </span>{' '}
                        {searchResult.date}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default CertificateValidation;
