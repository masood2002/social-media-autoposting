import express from "express";
import {
  createFbPost,
  createIgPost,
  createTwitterPost,
} from "../controllers/index.js";

const router = express.Router();

router.post("/create-fb-post", createFbPost);
router.post("/create-instagram-post", createIgPost);
router.post("/create-twitter-post", createTwitterPost);
export default router;
