import express, { Request, Response, Router } from "express"

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const movie: Object = {
        title: "극장판 짱구는 못말려: 수수께끼! 꽃피는 천하떡잎학교",
        star: 9.03
    }
    res.status(200).json({
        status: 200,
        message: "영화 조회 성공",
        data: movie
    });
});

module.exports = router;