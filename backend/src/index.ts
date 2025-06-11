import express, { Request, Response } from "express";
import cors from "cors";
import { globalError } from "./errors/globalError";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(globalError);

export default app;
