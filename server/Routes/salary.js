const express = require('express');
const {
  appendJsonFile,
  fetchStaffDetails,
  fetchStaffDetailsById,
  downloadSalarySlip,
  sendBulkEmail,
  sendEmail,
  downloadSalarySlipAsZip,
  editStaffDetails,
} = require('../Controllers/salary');

const salaryRoute = express.Router();
salaryRoute.post('/append_database', appendJsonFile);
salaryRoute.post('/edit-slip/:sdrn', editStaffDetails);
salaryRoute.post('/send-bulk-message', sendBulkEmail);
salaryRoute.post('/send-email', sendEmail);
salaryRoute.get('/fetch-staff/:sdrn', fetchStaffDetailsById);
salaryRoute.get('/receive-staff-list', fetchStaffDetails);
salaryRoute.get('/download-salaryslip/:sdrn', downloadSalarySlip);
salaryRoute.get('/download-as-zip', downloadSalarySlipAsZip);

module.exports = salaryRoute;
