import { S3Client } from "@aws-sdk/client-s3";
import config from ".";

//* AWS SDK 모듈이 제공하는 여러 메서드를 담은 S3객체를 만들어주는 함수
const s3: S3Client = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export default s3;
