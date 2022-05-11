module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.nxb.com.pk'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'ahtazaz.ahmad@nxb.com.pk',
          defaultReplyTo: 'ahtazaz.ahmad@nxb.com.pk',
        },
      },
    },
    // ...
  });