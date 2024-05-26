const express = require('express');

const {
  downloadCertificate,
  appendJsonFile,
  fetchStudentDetails,
  fetchStudentDetailsById,
  sendBulkEmail,
  sendEmail,
  downloadCertificateAsZip,
  searchCertificate,
  editStudentDetails,
} = require('../Controllers/certificate');

const certificateRoute = express.Router();

certificateRoute.post('/append_database', appendJsonFile);
certificateRoute.post('/edit-certificate/:id', editStudentDetails);
certificateRoute.post('/send-bulk-message', sendBulkEmail);
certificateRoute.post('/send-email', sendEmail);
certificateRoute.get('/fetch-student/:id', fetchStudentDetailsById);
certificateRoute.get('/search-certificate', searchCertificate);
certificateRoute.get('/receive-student-list', fetchStudentDetails);
certificateRoute.get('/download-certificate/:id', downloadCertificate);
certificateRoute.get('/download-as-zip', downloadCertificateAsZip);

module.exports = certificateRoute;
