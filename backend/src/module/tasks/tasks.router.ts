import express from "express";
import { tasksControler } from "./tasks.controler";

const router = express.Router();

router.post("/create-tasks", tasksControler.createTasks);

export const tasksRouter = router;
