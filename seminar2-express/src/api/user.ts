import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router(); //* exrpess의 라우팅 시스템

//* localhost:3000/api/user
router.get("/", (req: Request, res: Response) => { //* GET ~/~ 요청이 들어온다면
    const user = '하이 ㅋㅋ'; //db의 데이터
    return res.status(200).json({ //* 여기에 있는 로직 수행 json 보냄
    status: 200,
    message: "유저 조회 성공",
    data: user,
  });
});

module.exports = router; //* route 객체를 어디에서든 사용할 수 있도록 모듈화