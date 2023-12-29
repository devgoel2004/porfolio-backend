const sendEmail = require("../sendMail");

exports.sendingEmail = async (req, res, next) => {
  try {
    //Mail sent to programmer
    const messageSent = `${req.body.name} contacted you. with message\n ${req.body.message}`;
    await sendEmail({
      email: process.env.SMPT_MAIL,
      subject: req.body.subject,
      message: messageSent,
    });
    //mail sent to user
    await sendEmail({
      email: req.body.email,
      subject: "Thanks to contacting",
      message: `Thank you for reaching out!\n 🌟Your message has made its way to us, and we're genuinely grateful for your interest and the time you've taken to connect. We're excited to engage and will get back to you as soon as possible. Your inquiry means a lot, and we're looking forward to the opportunity to assist you.\nWarm regards,\n Dev Goel`,
    });
    res.status(200).json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
