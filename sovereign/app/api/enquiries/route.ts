import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      telephone,
      email,
      message,
      agreed,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !telephone ||
      !email ||
      !agreed
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const html = `
      <html>
        <body style="font-family: Arial, Helvetica, sans-serif;">
          <h2>Sovereign Estate</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
            <tr>
              <td><strong>First Name</strong></td>
              <td>${firstName}</td>
            </tr>

            <tr>
              <td><strong>Last Name</strong></td>
              <td>${lastName}</td>
            </tr>

            <tr>
              <td><strong>Telephone</strong></td>
              <td>${telephone}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message || "-"}</td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: "Contact Us Enquiry",
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: html,
            Charset: "UTF-8",
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("SES Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send enquiry.",
      },
      { status: 500 }
    );
  }
}