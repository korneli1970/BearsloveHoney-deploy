import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();
import dotenv from "dotenv";

router.post("/", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.text.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "natureluxdesign@gmail.com",
      pass: process.env.GMAIL,
    },
  });
  let mailOptions = {
    from: data.email,
    to: "natureluxdesign@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.text}</p>
             
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Us" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
export default router;
