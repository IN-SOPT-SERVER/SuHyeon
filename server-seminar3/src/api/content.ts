import { Request, Response} from "express";
import getItem from "./getItem";

const getContent = async (req: Request, res: Response) => {
    const {contentId} = req.params;

    const data = await getItem(Number(contentId));

    return res.status(200).json({
        status: 200,
        message: "컨텐츠 조회 성공",
        data: data
    });
};

export default getContent;
