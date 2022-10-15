import express, { Request, Response, Router } from "express"

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const blog: Object = {
        title: "글 제목",
        writer: "곰돌이",
        content: "글 내용~",
        isLike: true,
        blogId: 123
    }
    return res.status(200).json({
        status: 200,
        message: "블로그 조회 성공",
        data: blog
    });
});

module.exports = router;