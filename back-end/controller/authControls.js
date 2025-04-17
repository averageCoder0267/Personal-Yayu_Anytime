import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
    try {
        const { to, randomCode } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email,
                pass: process.env.Password,
            },
        });
        const mailOptions = {
            from: process.env.Email,
            to,
            subject: "Verification Email",
            html: `<!DOCTYPE html>
                    <html>

                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Verify Your Email - Yayu Anytime</title>
                        <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
                        <style>
                            body {
                                font-family: 'Lexend', sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                            }

                            .email-container {
                                background-color: #ffffff;
                                max-width: 600px;
                                margin: 40px auto;
                                border-radius: 8px;
                                overflow: hidden;
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                                user-select: none;
                            }

                            .email-header {
                                background-color: #ffc107;
                                color: white;
                                padding: 20px;
                                text-align: center;
                            }

                            .email-body {
                                padding: 10px 30px;
                            }

                            .email-body h2 {
                                margin-top: 0;
                                color: #333333;
                                font-size: 24px;
                            }

                            .email-body p{
                                font-size: 20px;
                            }

                            .code-box {
                                color: black;
                                font-size: 24px;
                                font-weight: bold;
                                padding: 2px auto;
                                border-radius: 6px;
                                letter-spacing: 4px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        </style>

                    </head>

                    <body>
                        <div class="email-container">
                            <div class="email-header">
                                <h1>Welcome to
                                    <span style=" text-decoration: underline black;">
                                        <span style="color: black;">Yayu</span>
                                        <span style="color: #198754;">Anytime!</span>
                                    </span>
                                </h1>
                            </div>
                            <div class="email-body">
                                <h2>Thank you for signing up!</h2>
                                <p>
                                    To complete your registration, please use the verification code below:
                                </p>
                                <h1 class="code-box">
                                    <span>
                                        ${randomCode}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </body>

                    </html>`
        };
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent!', info });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
}