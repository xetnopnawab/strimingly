import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true,
    optionSuccessStatus:204
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extends: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

module.exports = app;