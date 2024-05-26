const mongoose = require('mongoose');

const feeReceiptSchema = new mongoose.Schema(
  {
    receiptNo: {
      type: String,
      required: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    roll_no: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    student_email: {
      type: String,
      required: true,
    },
    academic_year: {
      type: String,
      required: true,
    },
    student_class: {
      type: String,
      required: true,
    },
    student_division: {
      type: String,
      required: true,
    },
    student_branch: {
      type: String,
      required: true,
    },
    student_course: {
      type: String,
      required: true,
    },
    address_student: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    amount_data: {
      type: String,
      required: true,
      default: '0',
    },
    date_of_payment: {
      type: String,
      required: true,
    },
    bank_name: {
      type: String,
      default: 'NA',
    },
    account_number: {
      type: String,
      default: 'XXXXXX123',
    },
    other_fees: {
      type: String,
      default: '0',
    },
    balance_fee_data: {
      type: String,
      default: '0',
    },
  },
  { timestamps: true }
);

const FeeReceipt = mongoose.model('FeeReceipt', feeReceiptSchema);

module.exports = FeeReceipt;
