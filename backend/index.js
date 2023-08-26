import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Login, Register, getCurrentUser } from "./controller/User.controller.js";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

app.get("/", (req, res) => {
    return res.send("working")
})

app.post("/register", Register);
app.post("/get-current-user", getCurrentUser);
app.post("/login", Login);

mongoose.connect(process.env.mongo_URL).then(() => {
    console.log("connected to mongoDB")
})

app.listen(4000, () => {
    console.log("port listening on 4000")
})
