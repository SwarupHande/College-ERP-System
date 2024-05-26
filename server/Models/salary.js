const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    sdrn: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    date_of_joining: {
      type: String,
      required: true,
    },
    basic: {
      type: String,
      required: true,
    },
    dearness_pay: {
      type: String,
      default: '0',
    },
    dearness_allowance: {
      type: String,
      required: true,
    },
    cla: {
      type: String,
      required: true,
    },
    ta: {
      type: String,
      required: true,
    },
    hra: {
      type: String,
      required: true,
    },
    others_1: {
      type: String,
      required: true,
    },
    pf_mgmt_share: {
      type: String,
      required: true,
    },
    arrears: {
      type: String,
      default: '0',
    },
    others: {
      type: String,
      default: '0',
    },
    designation: {
      type: String,
      required: true,
    },
    acc_no: {
      type: String,
      default: 'XXXXXX123',
    },
    days_present: {
      type: String,
      required: true,
    },
    pt: {
      type: String,
      required: true,
    },
    it: {
      type: String,
      required: true,
    },
    wpl: {
      type: String,
      default: '0',
    },
    pf: {
      type: String,
      required: true,
    },
    loan: {
      type: String,
      default: '0',
    },
    wc: {
      type: String,
      default: '0',
    },
    lic: {
      type: String,
      default: '0',
    },
    others_dec: {
      type: String,
      required: true,
    },
    mc: {
      type: String,
      default: '0',
    },
    gr_insu: {
      type: String,
      default: '0',
    },
    hr: {
      type: String,
      default: '0',
    },
    advance: {
      type: String,
      default: '0',
    },
    gross: {
      type: String,
      required: true,
    },
    total_dec: {
      type: String,
      default: 'NA',
    },
    net_pay: {
      type: String,
      default: 'NA',
    },
  },
  { timestamps: true }
);

const SalarySlip = mongoose.model('SalarySlip', salarySchema);

module.exports = SalarySlip;
