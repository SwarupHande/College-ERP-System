const express = require('express');
const {
  appendJsonFile,
  fetchStudentDetails,
  fetchStudentDetailsById,
  downloadFeeReceipt,
  sendBulkEmail,
  sendEmail,
  downloadFeeReceiptAsZip,
  editStudentDetails,
} = require('../Controllers/feeReceipt');

const feereceiptRoute = express.Router();

feereceiptRoute.post('/append_database', appendJsonFile);
feereceiptRoute.post('/edit-receipt/:id', editStudentDetails);
feereceiptRoute.post('/send-bulk-message', sendBulkEmail);
feereceiptRoute.post('/send-email', sendEmail);
feereceiptRoute.get('/fetch-student/:id', fetchStudentDetailsById);
feereceiptRoute.get('/receive-student-list', fetchStudentDetails);
feereceiptRoute.get('/download-feereceipt/:id', downloadFeeReceipt);
feereceiptRoute.get('/download-as-zip', downloadFeeReceiptAsZip);
module.exports = feereceiptRoute;
