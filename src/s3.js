require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_DEFAULT_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secreteAccessKey = process.env.AWS_SECRETE_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secreteAccessKey,
});

//Upload the images into S3

function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

exports.uploadFile = this.uploadFile;

//Download the images or fetch an image

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}

exports.getFileStream = getFileStream;
