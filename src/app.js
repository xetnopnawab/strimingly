import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
    optionSuccessStatus: 204,
  })
);

app.use(express.json({ limit: "16kb" })); // to support JSON-encoded bodies
app.use(express.urlencoded({ extends: true, limit: "16kb" })); // to support URL-encoded bodies
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes Declaration
app.use("/api/v1/users", userRouter);

//https://localhost:8000/api/v1/users/register

export { app };
