import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config";
import s3 from "../config/s3Config";

//? 미들웨어로 사용할 multer 모듈
//* "file" 필드로 받은 파일을 s3 버킷 내 이미지로 저장한 후 객체 url을 리턴
const upload = multer({
  //? 실질적인 storage 는 multerS3 이용해 aws s3 로 설정
  storage: multerS3({
    s3: s3, //? config내 s3 객체
    bucket: config.bucketName, //? s3 bucket name 지정
    contentType: multerS3.AUTO_CONTENT_TYPE, //? mimetype 은 자동으로 설정 -> 이미지의 png, jpg 등 타입을 자동으로 설정(보는 링크) -> 없으면 이미지 다운됨
    acl: "public-read", // Access control for the file

    //? key는 파일 이름을 지정. 버킷 내 같은 이름의 파일은 같은 파일로 인식하기 때문에 Unique하도록!
    key: function (req: Express.Request, file: Express.MulterS3.File, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});

export default upload;
