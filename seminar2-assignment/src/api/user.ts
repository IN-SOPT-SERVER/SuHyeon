import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const user: Object = {
    id: 1,
    name: "곰돌이",
    age: 18
  }
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: user
  });
});

module.exports = router;