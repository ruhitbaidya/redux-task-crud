import { model, Schema } from "mongoose";
import { TTasks } from "./tanksInterface";

const taskSchema = new Schema<TTasks>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  addrese: {
    type: String,
    required: true,
  },
});

export const tasksModel = model("Tasks", taskSchema);
