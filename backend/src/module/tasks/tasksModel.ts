import { model, Schema } from "mongoose";
import { TTasks } from "./tanksInterface";

const taskSchema = new Schema<TTasks>({
  firstnName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    enum : ["student" , "teacher" , "driver" , "business"],
    required: true,
  },
});

export const tasksModel = model("Tasks", taskSchema);
