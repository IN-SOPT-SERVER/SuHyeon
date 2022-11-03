import {Router} from "express";
import getContent from "../api/content";
 
const router = Router();

router.get("/:contentId", getContent);

export default router;
