const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'daschinmaya260@gmail.com', // Replace with your email
      pass: 'shgi rxeb fneb kjkq',        // Replace with your email password
    },
  });

  const mailOptions = {
    from: 'daschinmaya260@gmail.com',
    to,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
