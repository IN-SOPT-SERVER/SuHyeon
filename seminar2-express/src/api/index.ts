import express, {Router} from "express";

const router: Router = express.Router();

router.use("/user", require("./user")); //* ~/user path의 라우터는 ./user 라우터(user.ts)와 연결

module.exports = router;