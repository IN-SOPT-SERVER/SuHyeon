import express, {Router} from "express";
import contentRouter from "./contentRouter";

const router: Router = express.Router();

router.use("/movies", contentRouter);

module.exports = router;
