import { MailAdapter, SendMailData } from './mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3d119a9c535b3e",
        pass: "ddfa8c20b85b8d"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }:SendMailData) {
           await transport.sendMail({
        from: 'Equipe Feedget <oi@feedback.com>',
        to: 'Victoria Lucena <victoria-silva-lucena@hotmail.com>',
        subject,
        html: body,
    });
     }
}