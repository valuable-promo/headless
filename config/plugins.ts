module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_FROM"),
        defaultReplyTo: env("SMTP_FROM"),
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("SCALEWAY_ACCESS_KEY_ID"),
        secretAccessKey: env("SCALEWAY_ACCESS_SECRET"),
        endpoint: env("SCALEWAY_ENDPOINT"),
        params: {
          Bucket: env("SCALEWAY_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
