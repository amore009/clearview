import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
    process.env.RESEND_FROM_EMAIL ??
    'Clearview Contact Form <onboarding@resend.dev>';
const TO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;

export async function POST(request: Request) {
    try {
        const { fullName, email, subject, message } = await request.json();
        console.log('API Route Payload:', { fullName, email, subject, message });

        if (!fullName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (!TO_EMAIL) {
            console.error('CONTACT_RECEIVER_EMAIL is not set');
            return NextResponse.json(
                { error: 'Server is not configured to receive contact emails' },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `New Contact Form Submission: ${subject}`,
            replyTo: email,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend API Error:', JSON.stringify(error, null, 2));
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log('Resend Response Data:', data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server Error (Catch):', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
