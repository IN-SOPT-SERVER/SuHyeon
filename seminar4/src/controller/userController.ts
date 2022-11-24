import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { UserSignInDTO } from "../interfaces/common/user/UserSignInDTO";
import { UserCreateDTO } from "../interfaces/common/UserCreateDTO";
import jwtHandler from "../modules/jwtHandler";
import { userService } from "../service";

//* 유저 생성
const createUser = async (req: Request, res: Response) => {

  //? validation의 결과를 바탕으로 분기 처리
  //* 유효성 검증의 에러메시지를 받을 수 있음
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  }

  //? 기존 비구조화 할당 방식 -> DTO의 형태
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL))
  }

  //? 아까 만든 jwtHandler 내 sign 함수를 이용해 accessToken 생성
  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result))
};

//* 로그인
const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const userId = await userService.signIn(userSignInDto);

    if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    else if (userId === sc.UNAUTHORIZED)
      return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));

    //* 새로 발급
    const accessToken = jwtHandler.sign(userId);

    const result = {
      id: userId,
      accessToken,
    };

    res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
  } catch (e) {
    console.log(error);
    //? 서버 내부에서 오류 발생
    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();

  return res.status(sc.OK).json({ status: sc.OK, message: rm.READ_ALL_USERS_SUCCESS, data });
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { userName } = req.body;
  const { userId } = req.params;

  if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
  if (!userName) return res.status(sc.BAD_REQUEST).json({ status: sc.BAD_REQUEST, message: rm.UPDATE_USER_FAIL });

  const data = await userService.updateUser(+userId, userName);
  if (!data) return res.status(sc.BAD_REQUEST).json({ status: sc.BAD_REQUEST, message: rm.UPDATE_USER_FAIL });

  return res.status(sc.OK).json({ status: sc.OK, message: rm.UPDATE_USER_SUCCESS, data });
};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
  try {
    await userService.deleteUser(+userId);
    
    res.status(sc.OK).json({ status: sc.OK, message: rm.DELETE_USER_SUCCESS });
  }catch(error) {
    //* 사용자가 가입하지 않은 userId를 보낸 경우 -> 이렇게 처리하는 게 맞는지?
    res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.DELETE_USER_FAIL));
  }
};

//* controller -> 문지기, 서비스(비즈니스) 로직 포함x
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));

  //* params: string , userId: int
  //* Number() 형변환 대신 +userId 하면 타입변환됨
  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(sc.NOT_FOUND).json({ status: sc.NOT_FOUND, message: rm.NOT_FOUND });
  }
  return res.status(sc.OK).json({ status: sc.OK, message: rm.READ_USER_SUCCESS, data });
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signInUser,
};

export default userController;
