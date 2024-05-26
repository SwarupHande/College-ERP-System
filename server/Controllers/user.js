const Invite = require('../models/invite');
const User = require('../models/user');
const invitation = require('../documents/invitation');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const expressAsyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const registerUser = expressAsyncHandler(async (req, res) => {
  let { name, id, email, password, newPassword } = req.body;

  console.log(req.body);

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).json({ msg: 'Invalid Credentials' });
  // }
  const invitedUser = await Invite.findOne({
    senderId: id,
    email,
    password,
  })
    .sort({ createdAt: -1 })
    .limit(1);

  console.log(invitedUser);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  if (!invitedUser) {
    return res.status(400).json({ msg: 'Invalid Credentials' });
  }
  if (invitedUser.email != email) {
    console.log(invitedUser.email, email);
    return res.status(400).json({ msg: 'Email Incorrect' });
  }
  if (invitedUser.password != password) {
    return res.status(400).json({ msg: 'Password Incorrect' });
  }
  const salt = await bcrypt.genSalt(10);
  newPassword = await bcrypt.hash(newPassword, salt);

  const user = await User.create({ name, email, password: newPassword });

  const token = user.getJWT();

  console.log('User Registered Successfully!');
  res.status(200).json({ token });
});

// login
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for user

  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.status(400).json({ msg: 'User does not exist' });
  }

  const isMatch = await bcrypt.compare(password, userExists.password);
  if (!isMatch) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const token = userExists.getJWT();
  console.log('Login Successful!');
  res.status(200).json({ token });
});

const inviteUser = expressAsyncHandler(async (req, res) => {
  const { userId, email, password, expiry } = req.body;
  console.log(req.body);

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ msg: 'Invalid Sender ID' });
  }

  const user = User.findById(userId);
  if (!user) {
    return res.status(400).json({ msg: 'User does not exist' });
  }

  let exp = new Date(`${expiry}`);
  const invite = await Invite.insertMany({
    senderId: userId,
    email: email,
    password: password,
    expireAt: exp,
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL_ID,
      pass: process.env.SENDER_EMAIL_ID_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL_ID,
    to: email,
    subject: 'Login Credentials',
    html: invitation(email, password, userId),
  };

  const info = transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: 'Error sending email' });
    } else {
      res.status(200).json({ msg: 'Email sent successfully' });
    }
  });
});
module.exports = { registerUser, inviteUser, loginUser };
