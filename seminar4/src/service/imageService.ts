import { PrismaClient } from "@prisma/client";
import { ImageCreateResponseDTO } from "../interfaces/image/imageCreateResponseDTO";

const prisma = new PrismaClient();

//* 이미지 업로드
//* 함수 리턴 타입 => 명시하지 않는 이유???
const uploadImage = async (location: string): Promise<ImageCreateResponseDTO> => {
    const data = await prisma.image.create({
        data: {
            image: location,
        }
    });

    const result: ImageCreateResponseDTO = {
        id: data.id,
        image: data.image as string,
    };
    //* as string -> image가 null로 넘어올 수 있어서 error -> 타입 단언으로 해결

    return result;
};

const imageService = {
    uploadImage,
};

export default imageService;
