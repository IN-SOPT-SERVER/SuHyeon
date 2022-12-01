import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from "../constants";
import { UserSignInDTO } from "../interfaces/common/user/UserSignInDTO";
import { UserCreateDTO } from "../interfaces/common/UserCreateDTO";
const prisma = new PrismaClient();

//* 유저 생성
const createUser = async (userCreateDto: UserCreateDTO) => {
  //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user_Seminar.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};

//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.user_Seminar.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    //? bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고,
    //? match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user_Seminar.findMany();
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, userName: string) => {
  const data = await prisma.user_Seminar.update({
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
  try {
    const data = await prisma.user_Seminar.delete({
      where: {
        id: userId
      },
    });
    return data;
  }catch(error) {
    console.log(error);
    throw error;
  }
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  //* id -> unique
  //* where -> 조건, filter
  const user = await prisma.user_Seminar.findUnique({
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
  signIn,
};

export default userService;
