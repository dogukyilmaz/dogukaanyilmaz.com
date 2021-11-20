import nodemailer from 'nodemailer';
import { mailTemplate } from 'utils/mailTemplate';

export interface Options {
  senderMail?: string;
  subject?: string;
  name?: string;
  message?: string;
}

export const sendEmail = async (options: Options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  } as any);

  const message = {
    from: `'${options.name}' <${options.senderMail}>`,
    to: process.env.SMTP_RECEIVER_EMAIL,
    subject: options.subject,
    text: options.message,
    html: mailTemplate(options.subject, options.name, options.senderMail, options.message),
  };
  const info = await transporter.sendMail(message);
  console.log('Message sent: %s', info.messageId);
};
