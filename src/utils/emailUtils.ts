import transporter from '../../config/nodemailer';

 export async function sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            text
        });
        console.log('Email sent successfully');
    } catch (error:any) {
        console.error('Error sending email:', error.message);
        throw new Error('Failed to send email');
    }
 }
