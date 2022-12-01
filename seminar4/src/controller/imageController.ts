import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { imageService } from "../service";

//* 이미지 업로드 API
const uploadImage = async (req: Request, res: Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image; //* image 객체 내 location만 가져옴

    if (!location) {
        return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NO_IMAGE));
    }

    const data = await imageService.uploadImage(location);

    if (!data) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.CREATE_IMAGE_FAIL));
    }

    return res.status(sc.CREATED).send(success(sc.CREATED, rm.CREATE_IMAGE_SUCCESS, data));
};

const imageController = {
    uploadImage,
};

export default imageController;
