import nodemailer from "nodemailer";

import {
  EMAIL_SMTMP_SERVICE_NAME,
  EMAIL_SMTMP_HOST,
  EMAIL_SMTMP_PASS,
  EMAIL_SMTMP_PORT,
  EMAIL_SMTP_SECURE,
  EMAIL_SMTMP_USER,
} from "../env";

const trasnporter = nodemailer.createTransport({
  service: EMAIL_SMTMP_SERVICE_NAME,
  host: EMAIL_SMTMP_HOST,
  port: EMAIL_SMTMP_PORT,
  secure: EMAIL_SMTP_SECURE,
  auth: {
    user: EMAIL_SMTMP_USER,
    pass: EMAIL_SMTMP_PASS,
  },
  requireTLS: true,
});
