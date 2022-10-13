import express, { Request, Response, Router } from "express"

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const members = [
        {
            name: "김규원",
            age: 25,
            where: "안암역",
            favorite: "아메리카노",
            mbti: "ISTP"
        }, {
            name: "현세빈",
            age: 24,
            where: "청구역",
            favorite: "SOPT",
            mbti: "ENTP"
        }, {
            name: "강민재",
            age: 24,
            where: "상암",
            favorite: "스시",
            mbti: "ENFP"
        }
    ];
    return res.status(200).json({
        status: 200,
        message: "멤버 조회 성공",
        data: members
    });
});

module.exports = router;