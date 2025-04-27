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
                        <style>
                            body {
                                font-family: 'Lexend', sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                            }
                            
                            .email-container {
                                background-color: #ffffff;
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
                            
                            .email-body p {
                                font-size: 20px;
                            }
                            #randomCode{
                                font-weight: 900;
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
                                    To complete your registration, please use the verification code : <span id="randomCode">${randomCode}</span>
                                </p>
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