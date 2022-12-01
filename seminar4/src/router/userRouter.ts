import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

//* auth(미들웨어)를 거쳐서 getUserById로 이동
router.get("/:userId", auth, userController.getUserById);

//* 유저 생성(회원가입) - POST api/user
//* express-validator의 body를 통해 규칙 check -> 미들웨어
//* body("필드", "메시지").검증API -> body() : req.body에서 오는 값만 검사
router.post(
    '/',
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
);

//* 로그인 - POST api/user/signin
router.post(
    "/signin",
    [
        body("email").notEmpty().isEmail(),
        body("password").notEmpty().isLength({ min: 6 }),
    ],
    userController.signInUser
);

//* 전체 유저 조회 - GET api/user
router.get('/', userController.getAllUser);

//* 유저 정보 업데이트 - PATCH(부분 수정) api/user/:userId
router.patch('/:userId', userController.updateUser);

//* 유저 삭제 - DELETE api/user/:userId
router.delete('/:userId', userController.deleteUser);

export default router;
