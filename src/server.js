import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import serverless from "serverless-http";

import routes from "./routes/index.routes.js";
import { verifyToken } from "./middlewares/verifyToken.js";
import db from "./config/Database.js";

const corsOption = {
  origin: "https://jlabs-developer-internship-assessment-web.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const app = express();
app.options("", cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use("/api", routes);

app.get("/api/auth/verify-user", verifyToken, (req, res) => {
  const { token } = req.cookies;
  const user = req.currentUser;
  if (!token)
    return res.status(400).json({ message: "Invalid token not found" });

  return res.status(200).json(user);
});

app.get("/", (req, res) => {
  return res.json("Hello Testff");
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

export default app;
