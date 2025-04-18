const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "ap-south-1" });

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const params = {
    Destination: { ToAddresses: ["your.email@example.com"] },
    Message: {
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
      },
      Subject: { Data: "New Contact Form Submission" },
    },
    Source: "your.verified.email@example.com",
  };

  await ses.sendEmail(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully!" }),
  };
};
