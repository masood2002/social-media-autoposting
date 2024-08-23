import express from "express";
import cors from "cors";
import dbCon from "./utils/db.js";
import router from "./routes/socialMediaPosting.js";
import dotenv from "dotenv";
import i18n from "./i18.js";

dotenv.config();
dbCon();

const app = express();
app.use(i18n.init);
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(3000, () => {
  console.log("server is running at 3000");
});
