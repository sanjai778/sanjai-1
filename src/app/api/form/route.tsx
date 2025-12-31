import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import EmailHeader from '../../components/EmailHeader';
import EmailFooter from '../../components/EmailFooter';
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';

  try {
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const data: { [key: string]: string } = {};
      const fileUploads: { [key: string]: File } = {};

      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          fileUploads[key] = value;
        } else {
          data[key] = value as string;
        }
      }

      const { formName, formId, ...formDataWithoutFiles } = data;
      const email = data.businessEmail || data.email;

      for (const key in fileUploads) {
        const file = fileUploads[key];
        if (file) {
          const buffer = Buffer.from(await file.arrayBuffer());
          const filename = Date.now() + '-' + file.name.replace(/\s/g, '_');
          const uploadDir = path.join(process.cwd(), 'public/uploads', formName.replace(/\s/g, '-').toLowerCase());
          await fs.mkdir(uploadDir, { recursive: true });
          await fs.writeFile(path.join(uploadDir, filename), buffer);
          formDataWithoutFiles[key] = filename;
        }
      }

      await prisma.form.create({
        data: {
          formData: formDataWithoutFiles,
          email,
          formName,
          formId,
        },
      });

      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
    } else {
      const formData = await req.json();
      const { ratings, email } = formData;

      if (!ratings && !formData.formName) {
        return NextResponse.json({ error: 'Required form data is missing' }, { status: 400 });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: `New submission for ${formData.formName || 'Survey'}`,
        html: `
          ${EmailHeader()}
          <h1>New submission for ${formData.formName || 'Survey'}</h1>
          <p><strong>Email:</strong> ${email}</p>
          ${ratings ? `<h2>Ratings:</h2>
          <ul>
            ${ratings.map((rating: number, index: number) => `<li>Question ${index + 1}: ${rating}</li>`).join('')}
          </ul>` : ''}
          <pre>${JSON.stringify(formData, null, 2)}</pre>
          ${EmailFooter()}
        `,
      };

      await transporter.sendMail(mailOptions);

      const submission = await prisma.form.create({
        data: {
          formData: formData,
          email: email || formData.email,
          formName: formData.formName || 'Onfra Free Trial Survey',
          formId: formData.formId || '1001',
          emailSentStatus: true,
          emailSentDate: new Date(),
        },
      });

      return NextResponse.json({ message: 'Survey submitted successfully', submission }, { status: 201 });
    }
  } catch (error) {
    console.error('Full error object:', error);
    if (error instanceof Error) {
        console.error('Error message:', error.message);
    }
    return NextResponse.json({ error: 'An error occurred while submitting the survey' }, { status: 500 });
  }
}
