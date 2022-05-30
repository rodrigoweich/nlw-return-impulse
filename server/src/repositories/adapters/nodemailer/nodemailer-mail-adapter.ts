import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cccd78b34d4457",
    pass: "a0447baecb1e47"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rodrigo Weich <rodrigoweich@hotmail.com>',
      subject,
      html: body,
    })
  }
}