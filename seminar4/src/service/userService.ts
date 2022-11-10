import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  //* prisma promise 객체 리턴
  //* user -> user 모델(테이블)
  //* 테이블 필드명과 변수명 같아야 함 -> 순서는 고려하지 않아도 됨
  const data = await prisma.user.create({
    data: {
      userName: name,
      age,
      email,
    },
  });

  return data;
};

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, userName: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      userName
    }
  });

  return data;
};

//* 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  //* id -> unique
  //* where -> 조건, filter
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;
