const mongoose = require('mongoose');

const inviteSchema = mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Invite = mongoose.model('Invite', inviteSchema);
module.exports = Invite;
