require('dotenv').config({path: './.env'});
/*
var fs = require('fs');
var dbSchema =fs.readFileSync("a-recruit-api/configs/schema.sql").toString;
*/


const KeyID = process.env.AWS_ID
const SecretKey =process.env.AWS_SECRET 
const Bucket =process.env.AWS_BUCKET_NAME;


const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId:  KeyID,
    secretAccessKey: SecretKey

})

module.exports = {s3:s3,Bucket:Bucket};

