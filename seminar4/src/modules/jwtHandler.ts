import jwt from "jsonwebtoken";
import { tokenType } from "../constants";

//* 받아온 userId를 담는 access token 생성
const sign = (userId: number) => {
    //* jwt - payload(클라이언트 정보)
    const payload = {
        userId,
    };

    //* sign(payload(클라이언트 정보), secretkey, 유효기간(보안 목적)-2시간(option)) - accessToken 발행
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "2h" });
    return accessToken;
};

//* token 검사!
const verify = (token: string) => {
    let decoded: string | jwt.JwtPayload;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error: any) {
        if (error.message === "jwt expired") {
            return tokenType.TOKEN_EXPIRED;
        } else if (error.message === "invalid token") {
            return tokenType.TOKEN_INVALID;
        } else {
            return tokenType.TOKEN_INVALID;
        }
    }

    return decoded;
};

export default {
    sign,
    verify,
};
