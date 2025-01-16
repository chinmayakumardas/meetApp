const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const { generateToken } = require('../utils/jwt');

// Register User and Send OTP (Do not save to DB yet)
const registerUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      fullName,
      username,
      email,
      password,
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    newUser.otp = otp;
    newUser.otpExpiry = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    await sendEmail(newUser.email, 'Your OTP Code for Registration', `Your OTP is: ${otp}`, `<p>Your OTP is: <strong>${otp}</strong></p>`);

    await newUser.save();

    res.status(201).json({ message: 'User registered. OTP sent to email.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Verify OTP for Registration and Save User to DB
const verifyOtpForRegistration = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });
    if (Date.now() > user.otpExpiry) return res.status(400).json({ message: 'OTP has expired' });

    user.isOtpVerified = true;
    user.isActive = true;
    await user.save();

    const token = generateToken(user._id);
    user.jwtToken = token;
    await user.save();

    const emailSubject = 'Registration Successful';
    const emailText = `Hello ${user.username},\nYour registration was successful. Welcome to our platform!`;
    const emailHtml = `<p>Hello ${user.username},</p><p>Your registration was successful. Welcome to our platform!</p>`;
    await sendEmail(user.email, emailSubject, emailText, emailHtml);

    res.status(200).json({
      message: 'Registration completed successfully.',
      token,
    });
  } catch (error) {
    console.error('Error verifying OTP for registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Login User and Send OTP
const loginUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    user.otp = otp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    await user.save();

    await sendEmail(user.email, 'Your Login OTP Code', `Your OTP is: ${otp}`, `<p>Your OTP is: <strong>${otp}</strong></p>`);

    res.status(200).json({ message: 'Login OTP sent to your email.' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Verify OTP for Login and Issue Token
const verifyOtpForLogin = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });
    if (Date.now() > user.otpExpiry) return res.status(400).json({ message: 'OTP has expired' });

    const token = generateToken(user._id);
    user.jwtToken = token;
    await user.save();

    const emailSubject = 'Login Successful';
    const emailText = `Hello ${user.username},\nYour login was successful. Welcome back!`;
    const emailHtml = `<p>Hello ${user.username},</p><p>Your login was successful. Welcome back!</p>`;
    await sendEmail(user.email, emailSubject, emailText, emailHtml);

    res.status(200).json({
      message: 'Login successful.',
      token,
    });
  } catch (error) {
    console.error('Error verifying OTP for login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Resend OTP
const resendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiry = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    await user.save();

    await sendEmail(user.email, 'Your Resend OTP Code', `Your OTP is: ${otp}`, `<p>Your OTP is: <strong>${otp}</strong></p>`);

    res.status(200).json({ message: 'OTP resent to your email.' });
  } catch (error) {
    console.error('Error resending OTP:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  verifyOtpForRegistration,
  loginUser,
  verifyOtpForLogin,
  resendOtp,
};
