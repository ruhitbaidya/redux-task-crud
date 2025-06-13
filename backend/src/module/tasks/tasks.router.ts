import express from "express";
import { tasksControler } from "./tasks.controler";
import tasksValidationSchema, { updateTaskSchema } from "./tasks.validation";
import { validationSchema } from "../../middleware/validation.schema";

const router = express.Router();
router.get("/get-all-tasks", tasksControler.getallTasks)
router.post("/create-tasks", validationSchema(tasksValidationSchema), tasksControler.createTasks);
router.patch("/update-tasks/:id", validationSchema(updateTaskSchema), tasksControler.updateTasks);
router.delete("/delete-tasks/:id", tasksControler.deleteTasks)
export const tasksRouter = router;
