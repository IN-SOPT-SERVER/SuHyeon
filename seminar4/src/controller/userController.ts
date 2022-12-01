import { Request, Response } from "express";
import { userService } from "../service";

//* 유저 생성
const createUser = async (req: Request, res: Response) => {
  //* js 비구조 할당 - 변수명과 같은 field명의 값을 가져옴
  const {userName, email, age} = req.body;

  if(!userName || !email || !age) //null이면
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  
  const data = await userService.createUser(userName, email, age);

  if (!data) {
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  }
  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  
  return res.status(200).json({ status: 200, message: "유저 전체 조회 성공", data });
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const {userName} = req.body;
  const {userId} = req.params;

  if(!userName) return res.status(400).json({ status: 400, message: "유저 정보 업데이트 실패" });
  
  const data = await userService.updateUser(+userId, userName);
  return res.status(200).json({ status: 200, message: "유저 정보 업데이트 성공", data });
};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const {userId} = req.params;

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공"});
};

//* controller -> 문지기, 서비스(비즈니스) 로직 포함x
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  //* params: string , userId: int
  //* Number() 형변환 대신 +userId 하면 타입변환됨
  const data = await userService.getUserById(+userId); 

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userController;
