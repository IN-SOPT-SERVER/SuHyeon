import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares";

const router: Router = Router();

//* single: 단일 파일, array: 여러개 파일
router.post("/", upload.single("file"), imageController.uploadImage);
//* file 필드에서 이미지(파일)를 받음 -> middleware(upload)가 s3 bucket내 저장함 -> 객체 url을 받음

export default router;
