import { mailAdapter, mailData } from "../mail-adapter";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a01cbd43c7e6be",
    pass: "50bd0429a44e7a",
  },
});
export class NodemailerMailAdapter implements mailAdapter {
  async send({ subject, body }: mailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "keveny alves <kevenylima@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
