const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    VerificationCode: {
      type: String,
      required: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    student_email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    workshop_name: {
      type: String,
      required: true,
    },
    workshop_description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
