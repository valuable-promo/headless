module.exports = ({ env }) => ({
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
