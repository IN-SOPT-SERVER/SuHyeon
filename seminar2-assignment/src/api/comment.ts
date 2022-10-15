import express, { Request, Response, Router } from "express"

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const data: Object = {
        writer: "작성자1",
        content: "댓글!!!!!!"
    };
    return res.status(200).json({
        status: 200,
        message: "댓글 조회 성공",
        data: data
    });
});

module.exports = router;